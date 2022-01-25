export interface receivedProduct {
    gid: string;
    gartikul: string;
    gname: string;
    ggood_code: string;
    gquantity: string;
    gquantity_reserved: string;
    ged: string;
    gprice_cat_id: string;
    gweight: string;
    gstore: string;
    gvendor: string;
    gnote_file: string;
    gpict: string;
    gvendor_id: string;
    gstate: string;
    gnever_visible: string;
    ggroup_id: string;
    glast_change_date: string;
    gprice: string;
    gcurrency: string;
    order_example_paket_value: string;
    gallery_1_value: {
        [key: string]: string
    }
    gallery_2_value: {
        [key: string]: string
    }
    Priority_value: number;
    DiametrStock_value: string;
    DiametrCyl_value: string;
    Width_value: string;
    Thickness_value: string;
    Tolerance_value: string;
    OCT_value: string;
    TY12_value: string;
    small_picture_value: {
        [key: string]: string
    }
    drawing_value: {
        [key: string]: string
    }
    br_drawing_value: boolean;
    material_acetal_value: boolean;
    material_acetal_r_value: boolean;
    material_poliuritan_gu_value: boolean;
    material_poliuritan_gu_t_value: boolean;
    material_poliuritan_gu_r_value: boolean;
    material_rezina_value: boolean;
    material_rezina_p_value: boolean;
    rotation_spiral_value: boolean;
    parameters_mounting_value: string;
    parameters_material_value: string;
    parameters_one_table_value: string;
    can_be_ordered_value: boolean;
    d_max_value: number;
    h_max_value: number;
    DD_max_value: number;
    d_min_value: number;
    h_min_value: number;
    DD_min_value: number;
    catalog_description_value: string;
    order_example_value: string;
    order_example_alt_name_value: string;
    order_example_p_value: string;
    profile3d_2_value: string;
    profile3d_3_value: {
        [key: string]: string;
    }
    profile_from_pdf_value: {
        [key: string]: string;
    }
    seo_part_1_value: string;
    seo_part_2_value: string;
    seo_replace_all_value: string;
    gnote: string;
    picture_url: string;
}

export interface receivedCategory {
    rid: string;
    rtime: string;
    resource_id: string;
    rname: string;
    rparent: string;
    rlevel: string;
    urlalias: string;
    rposition: string;
    rtitle: string;
    icon: string;
    description: string;
    goods: receivedProduct[];
}

export interface filtredProduct {
    id: string;
    name: string;
    price: number;
    quantity: number;
    summ: number;
    categoryId: string;
}

export interface filtredCategory {
    id: string;
    name: string;
    totalPrice: number;
    totalQuantity: number;
    productsId: string[];
}

export enum tableActionEnum {
    SET_TABLE_PRODUCTS = 'SET_PRODUCTS',
    SET_TABLE_ERROR = 'SET_PRODUCTS_ERROR',
    SET_QUANTITY = 'SET_QUANTITY'
}

export interface setTableProducts {
    type: tableActionEnum.SET_TABLE_PRODUCTS,
    payload: receivedCategory[];
}

export interface setTableError {
    type: tableActionEnum.SET_TABLE_ERROR
}

export interface setQuantity {
    type: tableActionEnum.SET_QUANTITY,
    payload: {
        productId: string,
        quantity: number;
    }
}

export type InitialState = {
    products: {
        [key: string]: filtredProduct
    };
    categories: {
        [key: string]: filtredCategory
    }
    isError: boolean;
    isFetched: boolean;
}

export type tableAction = setTableProducts | setTableError | setQuantity | any;