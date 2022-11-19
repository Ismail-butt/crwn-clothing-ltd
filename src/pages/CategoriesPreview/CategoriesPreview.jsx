import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/categories/categorySelector'

import CategoryPreview from '../../components/category-preview/CategoryPreview'
import Spinner from '../../components/spinner/Spinner'

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading)

  return (
    <>
      <Helmet>
        <title>Shop page</title>
        <meta
          name='description'
          content='Previewing all the categories of the clothes.'
        />
      </Helmet>

      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => (
          <CategoryPreview
            key={title}
            title={title}
            products={categoriesMap[title]}
          />
        ))
      )}
    </>
  )
}

export default CategoriesPreview
