import SearchField from './index.jsx'

SearchField.install = (app) => {
  app.component(SearchField?.name, SearchField)
}

export default SearchField