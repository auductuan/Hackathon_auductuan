
import { NextRequest, NextResponse } from 'next/server';
import { products } from '../../database/products';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const product = products.find(p => p.id === parseInt(params.id));
  if (product) {
    return NextResponse.json(product);
  } else {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const updatedProduct = await request.json();
  const index = products.findIndex(p => p.id === parseInt(params.id));

  if (index !== -1) {
    products[index] = { ...products[index], ...updatedProduct };
    return NextResponse.json(products[index]);
  } else {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }
}
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const index = products.findIndex(p => p.id === parseInt(params.id));
    if (index !== -1) {
      const deletedProduct = products.splice(index, 1);
      return NextResponse.json(deletedProduct[0]);
    } else {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }
  }

