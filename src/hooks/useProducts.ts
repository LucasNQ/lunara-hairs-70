import { useMemo } from 'react';
import { Product } from '@/contexts/CartContext';

export const useProducts = () => {
  const products: Product[] = useMemo(() => [
    {
      id: 6,
      name: "Clareador de Manchas de Pele",
      price: 137.00,
      originalPrice: 169.00,
      image: "/lovable-uploads/c86d851d-b7bb-4644-bee5-3f3b4b9f73dd.png",
      images: [
        "/lovable-uploads/c86d851d-b7bb-4644-bee5-3f3b4b9f73dd.png",
        "/lovable-uploads/6abe5b16-b16d-46a7-b892-a0075fe9804d.png",
        "/lovable-uploads/b41498ec-4d7c-40b7-81a9-fe913104bf88.png",
        "/lovable-uploads/1d7af4be-30e3-4c55-8a4c-475c1e3a2a2b.png"
      ],
      rating: 4.9,
      reviews: 857,
      badge: "Premium",
      badgeColor: "bg-yellow-500",
      slug: "clareador-manchas-pele"
    },
    {
      id: 2,
      name: "TopHair Gummy - Cabelo Pele e Unha",
      price: 127.90,
      originalPrice: 157.90,
      image: "/lovable-uploads/67bbad07-0cc2-4886-b9a2-48a83c009207.png",
      images: [
        "/lovable-uploads/67bbad07-0cc2-4886-b9a2-48a83c009207.png",
        "/lovable-uploads/3dfcdf5b-48eb-4905-a35c-6763d6125138.png",
        "/lovable-uploads/be38cb8a-2720-4df0-9f9a-4c62c406a7bf.png",
        "/lovable-uploads/744e86a1-b689-477d-8bbf-feca6b494572.png",
        "/lovable-uploads/6653d618-9859-40fa-831b-bf119051cec1.png"
      ],
      rating: 4.7,
      reviews: 803,
      badge: "Novidade",
      badgeColor: "bg-pink-500",
      slug: "tophair-gummy-cabelo-pele-unha"
    },
    {
      id: 4,
      name: "Progressiva Vegetal Havana",
      price: 150.00,
      originalPrice: 197.00,
      image: "/lovable-uploads/77966a1c-ed1a-466c-8409-d3c586b9a24c.png",
      images: [
        "/lovable-uploads/77966a1c-ed1a-466c-8409-d3c586b9a24c.png",
        "/lovable-uploads/e305af6d-f14d-4b93-bc0e-9881a85b906e.png",
        "/lovable-uploads/dd7305ac-c697-45fe-a913-f1f1b5ccaea6.png",
        "/lovable-uploads/31651d9f-c5ca-49e0-939a-c069b7808002.png"
      ],
      rating: 4.6,
      reviews: 514,
      badge: "Recomendado",
      badgeColor: "bg-green-500",
      slug: "progressiva-vegetal-havana"
    },
    {
      id: 10,
      name: "Pente Alisador Portátil",
      price: 109.99,
      originalPrice: 159.90,
      image: "/lovable-uploads/7f1b5d3a-1e8c-4d2b-b461-39eb3eb10dcf.png",
      images: [
        "/lovable-uploads/7f1b5d3a-1e8c-4d2b-b461-39eb3eb10dcf.png",
        "/lovable-uploads/95b2c441-1687-4339-94fb-25163a088821.png",
        "/lovable-uploads/b657aab5-ac9c-428a-bd80-1f9f389fb57d.png",
        "/lovable-uploads/abe0f5f7-03f5-42b9-b26a-3dc77d8c8253.png"
      ],
      rating: 4.5,
      reviews: 492,
      badge: "Top 1",
      badgeColor: "bg-red-500",
      slug: "pente-alisador-portatil"
    },
    {
      id: 11,
      name: "Depilador Laser Flex",
      price: 109.90,
      originalPrice: 149.90,
      image: "/lovable-uploads/4adbb742-2e71-4fb8-8511-d78baab87d3b.png",
      images: [
        "/lovable-uploads/562cc77b-75ac-497f-a8f3-62ca4931e4be.png",
        "/lovable-uploads/65207d16-8992-44e8-b36d-37329ed798f8.png",
        "/lovable-uploads/c496c376-4168-4aec-a05a-e8124c15f43a.png",
        "/lovable-uploads/9e89a67b-2e72-44e5-9544-3a36be08497c.png"
      ],
      rating: 4.4,
      reviews: 298,
      badge: "Tecnologia",
      badgeColor: "bg-blue-500",
      slug: "depilador-laser-flex"
    },
    {
      id: 8,
      name: "Batom Depilador DepilaPlus",
      price: 99.97,
      originalPrice: 119.97,
      image: "/lovable-uploads/36bc3e98-6fe3-429b-851f-ae4d985807b1.png",
      images: [
        "/lovable-uploads/36bc3e98-6fe3-429b-851f-ae4d985807b1.png",
        "/lovable-uploads/ac406387-9c28-442f-9e47-55796000d6ec.png",
        "/lovable-uploads/3982500c-a7ac-4b0e-b1c5-6d109c9bd888.png",
        "/lovable-uploads/402d2dcf-03a0-4ee6-9914-e90fdad60cf9.png"
      ],
      rating: 4.4,
      reviews: 255,
      badge: "Inovação",
      badgeColor: "bg-purple-500",
      slug: "batom-depilador-depilaplus"
    },
    {
      id: 3,
      name: "Hidratante íntimo Love Girl",
      price: 67.00,
      originalPrice: 97.00,
      image: "/lovable-uploads/ebd82005-ebd1-4bb1-84c4-8d349125b554.png",
      images: [
        "/lovable-uploads/ebd82005-ebd1-4bb1-84c4-8d349125b554.png",
        "/lovable-uploads/7ad7ab1c-1045-4b13-a957-d215159e851c.png",
        "/lovable-uploads/6bae8b0c-e2a1-4d79-bde9-6a03c4728080.png"
      ],
      rating: 4.3,
      reviews: 187,
      badge: "Recomendado",
      badgeColor: "bg-green-500",
      slug: "hidratante-intimo-love-girl"
    },
    {
      id: 5,
      name: "Depilador feminino 5 em 1",
      price: 89.99,
      originalPrice: 109.99,
      image: "/lovable-uploads/7c791e46-67b9-410d-af19-403c448aaaf7.png",
      images: [
        "/lovable-uploads/7c791e46-67b9-410d-af19-403c448aaaf7.png",
        "/lovable-uploads/5ed797fe-384d-41fe-a840-1e7cd138f998.png",
        "/lovable-uploads/9b96fb25-70b8-468f-bd24-e6852620fcac.png",
        "/lovable-uploads/82ffc486-462a-47a8-9782-d71fd7b36fba.png",
        "/lovable-uploads/87e75a7f-f407-46a2-8ab6-80d2f42bd438.png"
      ],
      rating: 4.3,
      reviews: 251,
      badge: "Inovação",
      badgeColor: "bg-purple-500",
      slug: "depilador-feminino-5-em-1"
    },
    {
      id: 1,
      name: "Progressiva orgânica Liso Therapy",
      price: 197.00,
      originalPrice: 217.00,
      image: "/lovable-uploads/b36fc8a0-b04a-4706-97bd-2c2a5543f599.png",
      images: [
        "/lovable-uploads/b36fc8a0-b04a-4706-97bd-2c2a5543f599.png",
        "/lovable-uploads/0ee221ac-7b26-4611-91a1-b64cd1a0b4c5.png",
        "/lovable-uploads/ebce8383-afed-49cc-af03-ce4ce0d864c0.png"
      ],
      rating: 4.4,
      reviews: 358,
      badge: "Recomendado",
      badgeColor: "bg-green-500",
      slug: "progressiva-organica-liso-therapy"
    },
    {
      id: 7,
      name: "Escova de Limpeza Facial 5 em 1",
      price: 109.00,
      originalPrice: 159.99,
      image: "/lovable-uploads/632e943c-a491-4b2b-8ad6-8885daebbd15.png",
      images: [
        "/lovable-uploads/632e943c-a491-4b2b-8ad6-8885daebbd15.png",
        "/lovable-uploads/2ac9c9be-2559-4ece-bde7-ab92066ff9b0.png",
        "/lovable-uploads/a4f54902-3119-4bbc-a043-e4898bd88022.png",
        "/lovable-uploads/0124dab1-4136-4c4d-8ceb-0129c4757e42.png"
      ],
      rating: 3.7,
      reviews: 134,
      badge: "Novidade",
      badgeColor: "bg-pink-500",
      slug: "escova-limpeza-facial-5-em-1"
    }
  ], []);

  const getProductById = (id: number) => {
    return products.find(product => product.id === id);
  };

  const getProductBySlug = (slug: string) => {
    return products.find(product => product.slug === slug);
  };

  const getFeaturedProducts = (count: number = 3) => {
    return products.slice(0, count);
  };

  return {
    products,
    getProductById,
    getProductBySlug,
    getFeaturedProducts
  };
};