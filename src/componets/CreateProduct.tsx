import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { IProduct } from '../modals'

type Errors = {
  title?: string
}

interface IProps {
  onCreate: (product: IProduct) => void
}

function CreateProduct (props: IProps) {
  const { onCreate } = props

  const validate = (values: IProduct) => {
    const errors: Errors = {}

    if (!values.title) {
      errors.title = 'Required'
    } else if (values.title.length > 15) {
      errors.title = 'Must be 15 characters or less'
    }
    return errors
  }

  const formik = useFormik({
    initialValues: {
      title: '',
      price: 235,
      description: '',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
    },
    validate,
    onSubmit: async values => {
      const response = await axios.post<IProduct>('https://fakestoreapi.com/products', values)

      onCreate(response.data)
    },

  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <input type="text"
             id="title"
             className="border py-2 px-4 mb-2 w-full outline-none"
             placeholder="Enter product title"
             value={formik.values.title}
             onChange={formik.handleChange}
      />
      {formik.errors.title && <p className="text-center mt-2 text-red-800">{formik.errors.title}</p>}
      <button type="submit" className="py-2 px-4 border bg-red-400">
        Create
      </button>
    </form>
  )
}

export default CreateProduct
