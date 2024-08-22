import { NextResponse } from 'next/server'
import {products} from '../../database/data'


export async function POST(req: any, res: any) {
    const { id, productName, price, image, quantity } = await req.json();

    const newProduct = {
        id: products.length + 1,
        productName,
        price,
        image,
        quantity
    };
    products.push(newProduct);

    return NextResponse.json({
        message: 'Thêm mới thông tin sản phẩm thành công',
        data: newProduct,
    });
}

export async function GET(req: any, res: any) {
    return NextResponse.json({
        data: products,
    })
}
