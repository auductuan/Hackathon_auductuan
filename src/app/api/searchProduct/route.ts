import { NextResponse } from 'next/server'
import {products} from '../../database/data'

export async function GET(req: any) {
    const { searchParams } = new URL(req.url);
    const queryName = searchParams.get('name');

    if (queryName) {
        const findName = products.filter((item) =>
            item.productName.includes(queryName)
        );

        if (findName.length > 0) {
            return NextResponse.json({
                data: findName,
            });
        } else {
            return NextResponse.json({
                message: `Không tìm thấy sản phẩm có tên = "${queryName}"`,
            });
        }
    } 
}

