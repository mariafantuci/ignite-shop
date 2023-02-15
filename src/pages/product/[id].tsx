import Image from 'next/image'

import { ImageContainer, ProductContainer, ProductDetails } from '@/src/styles/pages/product'
import { useRouter } from 'next/router'

export default function Product(){
    const { query } = useRouter()
    return (
        <ProductContainer>
          <ImageContainer>
            <Image width={520} height={480} src="https://www.nicepng.com/png/detail/206-2067446_minions-transparent-images-minion-wallpaper-for-redmi-note.png" alt="" />
          </ImageContainer>
    
          <ProductDetails>
            <h1>Camiseta X</h1>
            <span>R$ 79,90</span>
    
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores aliquid rerum exercitationem facere a molestiae ut sed velit non mollitia? Officiis hic velit assumenda aspernatur nihil, sint sed laboriosam tempora?</p>
    
            <button>
              Comprar agora
            </button>
          </ProductDetails>
        </ProductContainer>
    )
}