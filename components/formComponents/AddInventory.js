import React from "react"

const initialState = {
  name: "",
  brand: "",
  price: "",
  categories: [],
  image: "",
  description: "",
  currentInventory: "",
}

class AddInventory extends React.Component {
  state = initialState
  clearForm = () => {
    this.setState(() => initialState)
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  onImageChange = async (e) => {
    const file = e.target.files[0]
    this.setState({ image: file })
    // const storageUrl = await Storage.put('example.png', file, {
    //     contentType: 'image/png'
    // })
    // this.setState({ image: storageUrl  })
  }
  addItem = async () => {
    const {
      name,
      brand,
      price,
      categories,
      image,
      description,
      currentInventory,
    } = this.state
    if (
      !name ||
      !brand ||
      !price ||
      !categories.length ||
      !description ||
      !currentInventory ||
      !image
    )
      return
    // add to database
    this.clearForm()
  }
  render() {
    const {
      name,
      brand,
      price,
      categories,
      image,
      description,
      currentInventory,
    } = this.state
    return (
      <div>
        <h3 className="text-3xl">Adicionar Produto</h3>
        <div className="flex flex-1 justify-center">
          <div className="w-full max-w-144">
            <form className="bg-white shadow-xs rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Nome do Produto
                </label>
                <input
                  onChange={this.onChange}
                  value={name}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Nome do Produto"
                  name="name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="price"
                >
                  Preço do Produto
                </label>
                <input
                  onChange={this.onChange}
                  value={price}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="price"
                  type="text"
                  placeholder="Preço do Produto"
                  name="price"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="description"
                >
                  Descrição do Produto
                </label>
                <input
                  onChange={this.onChange}
                  value={description}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="description"
                  placeholder="Descrição do Produto"
                  name="description"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Imagem do Produto"
                >
                  Imagem do Produto
                </label>
                <input type="file" onChange={(e) => this.onImageChange(e)} />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="currentInventory"
                >
                  Em estoque
                </label>
                <input
                  onChange={this.onChange}
                  value={currentInventory}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="currentInventory"
                  placeholder="Quantidade em estoque"
                  name="currentInventory"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="categories"
                >
                  Categoria
                </label>
                <input
                  onChange={this.onChange}
                  value={categories}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="categories"
                  placeholder="Categoria"
                  name="categories"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="brand"
                >
                  Marca
                </label>
                <input
                  onChange={this.onChange}
                  value={brand}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="brand"
                  placeholder="Marca"
                  name="brand"
                />
              </div>
              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={this.addItem}
                  className="bg-primary hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Adicionar Produto
                </button>
                <a
                  onClick={this.clearForm}
                  className="inline-block align-baseline font-bold text-sm"
                  href="#"
                >
                  Limpar formulário
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AddInventory
