import { NextResponse } from 'next/server'
import {products} from '../../database/data'


export async function GET(req: any, res: any) {
    return NextResponse.json({
        data: products,
    })
}
