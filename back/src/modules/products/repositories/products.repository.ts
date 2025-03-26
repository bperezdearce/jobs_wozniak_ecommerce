import { Injectable } from '@nestjs/common';
import { Product } from '../products.interfaces';

@Injectable()
export class ProductsRepository {
  private products: Product[] = [
    {
      id: 1,
      name: 'iPhone 16',
      description:
        'Pantalla Super Retina XDR; Pantalla OLED de 6,1 pulgadas (diagonal) sin marco; Resolución de 2556 x 1179 pixeles a 460 ppi.',
      price: 649000,
      stock: true,
      imgUrl:
        'https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-16.png',
    },
    {
      id: 2,
      name: 'MacBook Pro 16” M3',
      description:
        'Chip M3 Pro con CPU de 12 núcleos y GPU de 18 núcleos; Pantalla Liquid Retina XDR de 16,2 pulgadas; 18 GB de RAM unificada.',
      price: 2499000,
      stock: true,
      imgUrl:
        'https://photos5.appleinsider.com/price_guide/macbook-pro-16-inch-m3-pg-header.png',
    },
    {
      id: 3,
      name: 'iPad Air 6',
      description:
        'Pantalla Liquid Retina de 10,9 pulgadas; Chip M2; Compatible con Apple Pencil Pro y Magic Keyboard.',
      price: 799000,
      stock: true,
      imgUrl:
        'https://cdsassets.apple.com/live/7WUAS350/images/ipad/spring-2024-4.png',
    },
    {
      id: 4,
      name: 'Apple Watch Series 9',
      description:
        'Caja de aluminio de 45 mm; Pantalla Retina siempre activa; Chip S9 SiP; Doble toque.',
      price: 399000,
      stock: true,
      imgUrl:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-series-9-digitalmat-gallery-1-202309_GEO_EMEA?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1693703810211',
    },
    {
      id: 5,
      name: 'AirPods Pro (2.ª generación)',
      description:
        'Cancelación activa de ruido; Audio espacial personalizado; Estuche de carga MagSafe con altavoz.',
      price: 299000,
      stock: true,
      imgUrl:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1660803972361',
    },
    {
      id: 6,
      name: 'iMac 24” M3',
      description:
        'Pantalla Retina 4.5K de 24 pulgadas; Chip M3; 8 GB de RAM unificada; Almacenamiento SSD de 256 GB.',
      price: 1749000,
      stock: true,
      imgUrl:
        'https://www.apple.com/newsroom/images/product/imac/standard/Apple-iMac-24-M3-hero-231030_Full-Bleed-Image.jpg.large.jpg',
    },
    {
      id: 7,
      name: 'MacBook Air 13” M2',
      description:
        'Chip M2; Pantalla Liquid Retina de 13,6 pulgadas; Diseño ultradelgado; Hasta 18 horas de batería.',
      price: 1299000,
      stock: true,
      imgUrl:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-13-m2-2022?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1653493200207',
    },
    {
      id: 8,
      name: 'Apple Vision Pro',
      description:
        'Computación espacial; Pantalla micro‑OLED con resolución ultraalta; Control por mirada, voz y gestos.',
      price: 3499000,
      stock: true,
      imgUrl:
        'https://www.apple.com/v/apple-vision-pro/b/images/overview/hero/portrait_base__bwsgtdddcl7m_large.jpg',
    },
    {
      id: 9,
      name: 'Apple TV 4K (3.ª gen)',
      description:
        'Soporte para HDR10+ y Dolby Vision; Chip A15 Bionic; Almacenamiento de 64 GB.',
      price: 189000,
      stock: true,
      imgUrl:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-tv-4k-select-202210?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1664896367026',
    },
    {
      id: 10,
      name: 'Magic Keyboard para iPad Pro',
      description:
        'Teclado retroiluminado con trackpad integrado; Compatible con iPad Pro 11 y 12.9 pulgadas.',
      price: 499000,
      stock: true,
      imgUrl:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJQJ3?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1645719942067',
    },
    {
      id: 11,
      name: 'HomePod (2.ª generación)',
      description:
        'Audio de alta fidelidad; Reconocimiento de sonido; Sensor de temperatura y humedad.',
      price: 349000,
      stock: true,
      imgUrl:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-select-midnight-202301?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1671571453014',
    },
    {
      id: 12,
      name: 'iPhone SE (3.ª generación)',
      description:
        'Pantalla Retina HD de 4,7 pulgadas; Chip A15 Bionic; Touch ID; 5G.',
      price: 449000,
      stock: true,
      imgUrl:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-select-2022?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1644987977608',
    },
    {
      id: 13,
      name: 'Apple Pencil Pro',
      description:
        'Detección de presión y ángulo; Nuevo gesto de apretar; Emparejamiento y carga magnética.',
      price: 189000,
      stock: true,
      imgUrl:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MUWA3?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1713200190102',
    },
    {
      id: 14,
      name: 'Smart Keyboard Folio',
      description:
        'Diseño delgado y liviano; No necesita recarga ni emparejamiento; Compatible con iPad Pro y iPad Air.',
      price: 299000,
      stock: true,
      imgUrl:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXNK2?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1570119352648',
    },
  ];

  getAllProducts(page: number = 1, limit: number = 5) {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    return this.products.slice(startIndex, endIndex);
  }

  getProductById(id: number) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }
    return product;
  }

  createProduct(product: Omit<Product, 'id'>) {
    const id = this.products.length + 1;
    const newProduct = {
      id,
      ...product,
    };
    this.products = [...this.products, newProduct];
    return { id };
  }

  updateProduct(id: number, updatedData: Partial<Omit<Product, 'id'>>) {
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );

    this.products[productIndex] = {
      ...this.products[productIndex],
      ...updatedData,
    };

    return this.products[productIndex];
  }

  deleteProduct(id: number) {
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );

    const deletedProduct = this.products[productIndex];
    this.products.splice(productIndex, 1);

    return deletedProduct;
  }
}
