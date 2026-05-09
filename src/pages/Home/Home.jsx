import './Home.css'
import Header from '../../components/Header/Header'
import Categories from '../../components/Categories/Categories'
import Products from '../../components/Products/Products'
export default function Home() {
  return (
    <div className='mx-auto '>
      <Header />
      <Categories />
      <Products cat='mainStore'/>
    </div>
  )
}
2