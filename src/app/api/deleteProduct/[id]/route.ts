import { NextResponse } from 'next/server'
import {products} from '../../../database/data'


export async function DELETE(req: any, res: any) {
    const { idProduct } = res.params; 
    const productIndex = products.findIndex((item) => item.id == +idProduct);

    if (productIndex !== -1) {
        products.splice(productIndex, 1);
        return NextResponse.json({
            message: 'Xóa thông tin sản phẩm thành công',
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
