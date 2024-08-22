import React from 'react'
export type Products = {
    id: number,
    productName: string,
    price: number,
    image: string,
    quantity: number,
}

export const products: Products[] = [
  {
    id: 1,
    productName: 'Cam',
    price: 12000,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEQx__JSjRbTuRcvoEbOQ5p7Ofz1RTMAf8rA&s',
    quantity: 12,
  },
  {
    id: 2,
    productName: 'Táo',
    price: 15000,
    image: 'https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-asm/posts/1-10.webp',
    quantity: 20,
  },
  {
    id: 3,
    productName: 'Nho',
    price: 25000,
    image: 'https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/an_nho_co_tot_khong_thanh_phan_dinh_duong_trong_qua_nho_la_gi_1_9159e2dc25.jpg',
    quantity: 8,
  },
  {
    id: 4,
    productName: 'Chuối',
    price: 10000,
    image: 'https://namnguyenduoc.com/wp-content/uploads/2023/03/Chuoi.jpg',
    quantity: 30,
  },
]
