export const productList: Product[]= [
    
        {id: 1, name: 'Bleach', price: 10, description: 'Powerful bleach for a sparkling clean'},
        {id: 2, name: 'Dish Detergent', price: 5, description: 'Tough on grease, gentle on dishes'},
        {id: 3, name: 'Glass Cleaner', price: 20, description: 'Leaves your windows streak-free'},
        {id: 4, name: 'Degreaser', price: 2, description: 'Easily removes stubborn grease and grime'},
        {id: 5, name: 'Floor Cloth', price: 23, description: 'Absorbent cloth for squeaky clean floors'},
        {id: 6, name: 'Grill Brush', price: 10},    
    
]

export interface Product {
    id: number | string;
    name: string;
    price: number;
    description?: string;
}