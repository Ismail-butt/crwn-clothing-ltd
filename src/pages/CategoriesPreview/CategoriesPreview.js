import { useContext } from 'react'
import CategoryPreview from '../../components/category-preview/CategoryPreview'
import CategoriesContext from '../../contexts/CategoriesContext'

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext)
  return (
    <>
      {Object.keys(categoriesMap).map((title) => (
        <CategoryPreview
          key={title}
          title={title}
          products={categoriesMap[title]}
        />
      ))}
    </>
  )
}

export default CategoriesPreview
