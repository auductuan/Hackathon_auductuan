import { NextResponse } from 'next/server'
import {products} from '../../database/data'

export async function PUT(req: any, res: any) {
    const { idProduct } = res.params; 
    const { id, productName, price, image, quantity } = await req.json();
    

    const productIndex = products.findIndex((item) => item.id == +idProduct);

    if (productIndex !== -1) {
        
        products[productIndex] = {
            ...products[productIndex],
            id: id || products[productIndex].id,
            productName: productName || products[productIndex].productName,
            price: price || products[productIndex].price,
            image: image || products[productIndex].image,
            quantity: quantity || products[productIndex].quantity,

        };

        return NextResponse.json({
            message: 'Cập nhật thông tin sản phẩm thành công',
            data: products[productIndex],
        });
    } else {
        return NextResponse.json({
            message: `Không tìm thấy sản phẩm có id = ${idProduct}`,
        });
    }
}

export async function GET(req: any, res: any) {
    return NextResponse.json({
        data: products,
    })
}
