// src/app/api/products/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { products,Product } from '../database/products';

export async function POST(request: NextRequest) {
  const newProduct: Product = await request.json();
  newProduct.id = products.length + 1; 
  products.push(newProduct);
  return NextResponse.json(newProduct);
}
