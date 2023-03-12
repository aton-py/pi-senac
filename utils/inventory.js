import { v4 as uuid } from "uuid"

let inventory = [
  {
    categories: ["luzes"],
    name: "Kit iluminação youtuber",
    price: "1000",
    image: "/products/lights1.png",
    description:
      "O Kit de Iluminação Youtuber é uma solução ideal para quem busca aprimorar a qualidade de seus vídeos, tanto para quem está iniciando na plataforma quanto para quem já possui um canal consolidado.",
    brand: "YouLight",
    currentInventory: 4,
  },
  {
    categories: ["cameras"],
    name: "4k Spectrum",
    price: "1000",
    image: "/products/camera1.png",
    description:
      "A câmera de foto 4K Spectrum é uma escolha perfeita para fotógrafos que buscam alta qualidade de imagem e desempenho profissional. Com sua resolução 4K, esta câmera captura imagens detalhadas e vibrantes, permitindo que você veja até mesmo os mínimos detalhes em suas fotos. Equipada com uma lente de alta qualidade e sensor CMOS de última geração, a 4K Spectrum oferece fotos nítidas e brilhantes, mesmo em condições de pouca luz. Além disso, sua interface intuitiva e fácil de usar permite que você ajuste as configurações da câmera com facilidade e rapidez.",
    brand: "Spectrum",
    currentInventory: 2,
  },
  {
    categories: ["cameras"],
    name: "Nippon",
    price: "800",
    image: "/products/camera2.png",
    description:
      "Compacta e leve, a Nippon é ideal para fotógrafos em movimento e oferece diversas opções de conectividade, incluindo WiFi e Bluetooth, para que você possa compartilhar suas fotos instantaneamente com seus amigos e seguidores nas redes sociais. Com a câmera 4K Spectrum, você pode capturar imagens de tirar o fôlego e criar uma galeria de fotos que será lembrada por anos.",
    brand: "Nippon",
    currentInventory: 8,
  },
  {
    categories: ["cameras"],
    name: "Senac 4k",
    price: "900",
    image: "/products/camera3.png",
    description:
      "A câmera de foto Senac 4K é uma escolha perfeita para fotógrafos que buscam alta qualidade de imagem e desempenho profissional. Com sua resolução 4K, esta câmera captura imagens detalhadas e vibrantes, permitindo que você veja até mesmo os mínimos detalhes em suas fotos.",
    brand: "Senac 4k",
    currentInventory: 10,
  },
  {
    categories: ["cameras", "video"],
    name: "ADS eyes",
    price: "1200",
    image: "/products/camera4.png",
    description:
      "Equipada com uma lente de alta qualidade e sensor CMOS de última geração, a ADS eyes oferece fotos nítidas e brilhantes, mesmo em condições de pouca luz. Além disso, sua interface intuitiva e fácil de usar permite que você ajuste as configurações da câmera com facilidade e rapidez.",
    brand: "ADS eyes",
    currentInventory: 7,
  },
  {
    categories: ["video"],
    name: "Supreme 4k",
    price: "300",
    image: "/products/video1.png",
    description:
      "Compacta e leve, a Supreme 4k é ideal para fotógrafos em movimento e oferece diversas opções de conectividade, incluindo WiFi e Bluetooth, para que você possa compartilhar suas fotos instantaneamente com seus amigos e seguidores nas redes sociais. Com a câmera 4K Spectrum, você pode capturar imagens de tirar o fôlego e criar uma galeria de fotos que será lembrada por anos.",
    brand: "Supreme 4k",
    currentInventory: 12,
  },
  {
    categories: ["video"],
    name: "Hyper 8k",
    price: "825",
    image: "/products/video2.png",
    description:
      "Compacta e leve, a Hyper 8k é ideal para fotógrafos em movimento e oferece diversas opções de conectividade, incluindo WiFi e Bluetooth, para que você possa compartilhar suas fotos instantaneamente com seus amigos e seguidores nas redes sociais. Com a câmera 4K Spectrum, você pode capturar imagens de tirar o fôlego e criar uma galeria de fotos que será lembrada por anos.",
    brand: "Hyper 8k",
    currentInventory: 13,
  },
  {
    categories: ["video"],
    name: "OMG 12k",
    price: "720",
    image: "/products/video3.png",
    description:
      "Compacta e leve, a OMG 12k é ideal para fotógrafos em movimento e oferece diversas opções de conectividade, incluindo WiFi e Bluetooth, para que você possa compartilhar suas fotos instantaneamente com seus amigos e seguidores nas redes sociais. Com a câmera 4K Spectrum, você pode capturar imagens de tirar o fôlego e criar uma galeria de fotos que será lembrada por anos.",
    brand: "OMG 12k",
    currentInventory: 33,
  },
  {
    categories: ["video"],
    name: "Unique  Shot",
    price: "2000",
    image: "/products/video4.png",
    description:
      "Compacta e leve, a Unique  Shot é ideal para fotógrafos em movimento e oferece diversas opções de conectividade, incluindo WiFi e Bluetooth, para que você possa compartilhar suas fotos instantaneamente com seus amigos e seguidores nas redes sociais. Com a câmera 4K Spectrum, você pode capturar imagens de tirar o fôlego e criar uma galeria de fotos que será lembrada por anos.",
    brand: "Unique  Shot",
    currentInventory: 23,
  },
]

inventory.map((i) => {
  i.id = uuid()
  return i
})

export default inventory
