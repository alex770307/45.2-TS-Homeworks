import { Link, useParams } from 'react-router-dom';
import styles from './storePage.module.css'
import { useEffect, useState } from 'react';
import MyButton from '../myButton/MyButton';
import { IStoreProps } from '../store/Store';


//  const initial: IStorePageProps = {
//      id: 0,
//      title: '',
//      description: '',
//      category: '',
//      price: 0,
//      discountPercentage: 0,
//      rating: 0,
//      stock: 0,
//      tags: [],
//      brand: '',
//      sku: '',
//      weight: 0,
//      dimensions: {
//          width: 0,
//          height: 0,
//          depth: 0
//      },
//      warrantyInformation: '',
//      shippingInformation: '',
//      availabilityStatus: '',
//      reviews: [
//         {
//             rating: 0,
//             comment: '',
//             date: '',
//             reviewerName: '',
//             reviewerEmail: ''
//         },
//         {
//             rating: 0,
//             comment: '',
//             date: '',
//             reviewerName: '',
//             reviewerEmail: ''
//         },
//         {
//             rating: 0,
//             comment: '',
//             date: '',
//             reviewerName: '',
//             reviewerEmail: '',
//         }
//      ],
//      returnPolicy: '',
//      minimumOrderQuantity: 0,
//      meta: {
//          createdAt: '',
//          updatedAt: '',
//          barcode: '',
//          qrCode: ''
//      },
//      images: [],
//      thumbnail: ''
//  }
const initial: IStoreProps ={
    id: 0,
    title: '',
    description: '',
    category: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    tags: [],
    brand: '',
    sku: '',
    weight: 0,
    dimensions: {
        width: 0,
        height: 0,
        depth: 0
    },
    warrantyInformation: '',
    shippingInformation: '',
    availabilityStatus: '',
    reviews: [
        {
            rating: 0,
            comment: '',
            date: '',
            reviewerName: '',
            reviewerEmail: ''
        },
        {
            rating: 0,
            comment: '',
            date: '',
            reviewerName: '',
            reviewerEmail: ''
        },
        {
            rating: 0,
            comment: '',
            date: '',
            reviewerName: '',
            reviewerEmail: '',
        }
     ],
    returnPolicy: '',
    minimumOrderQuantity: 0,
    meta: {
        createdAt: '',
        updatedAt: '',
        barcode: '',
        qrCode: ''
    },
    images: [],
    thumbnail: ''
}
export default function StorePage(): JSX.Element {
    const { id } = useParams();
    const [product, setProduct] = useState<IStoreProps>(initial);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
          .then(res => res.json())
          .then(data => setProduct(data));
      }, []);
  return (
    <div className={styles.container}>
    <h2 className={styles.title}>{product.title}</h2>
    <p className={styles.description}>{product.description}</p>
    <img className={styles.image} src={product.images[0]} alt={product.title} />
    <p>{product.category}</p>
    <div className={styles.backButtonContainer}>
      <Link to={'/homework-17'}>
        <MyButton variant="danger" text="back to products" />
      </Link>
    </div>
  </div>
  )
}