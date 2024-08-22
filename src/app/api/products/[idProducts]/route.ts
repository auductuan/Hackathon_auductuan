import { NextResponse } from 'next/server'
import {products} from '../../../database/data'


export async function GET(req: any, res: any) {
    let findItem = products.find((item) => {
        return item.id == +res.params.idProducts
    })

    if (findItem) {
        return NextResponse.json({
            data: findItem,
        })
    } else {
        return NextResponse.json({
            message: `Không tìm thấy sản phẩm có id = ${res.params.idProducts}`,
        })
    }
}
