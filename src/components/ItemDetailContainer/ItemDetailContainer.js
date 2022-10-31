import './ItemDetailContainer.css'
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ItemDetailComponent from '../ItemDetailComponent/ItemDetailComponent'
import Lottie from 'react-lottie';
import pencil from '../lotties/pencil.json';
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebase'

const ItemDetailContainer = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: pencil,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const {paramId} = useParams()
  const [item, setitemDetails] = useState([])
  let [loading, setLoading] = useState(true);

  useEffect(() => { 
          getDoc(doc(db, 'items', paramId)).then((querySnapshot) => {
            const product = {id: querySnapshot.id, ...querySnapshot.data()}
            setitemDetails(product)
          }).catch((error) => {
            console.log('Error seraching items', error)
        }).finally(() => {
            setLoading(false);
        })
          
        }, [paramId])

  return (
    <div className="someContainer">
      {item.id !== undefined ? <ItemDetailComponent item={item} /> : null}
        {loading && <Lottie 
                  options={defaultOptions}
                  height={400}
                  width={400}
                  loading={loading}
              />}
    </div>
    
  );
}

export default ItemDetailContainer;