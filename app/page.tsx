import Brands from '@/components/Brands'
import Header from '@/components/Header'
import NewCollection from '@/components/NewCollection'
import Newsletter from '@/components/Newsletter'
import Services from '@/components/Services'
import ShelfProduct from '@/components/ShelfProduct'
import SimpleSlider from '@/components/Slider'
import Footer from '@/components/Footer'
import ModalPopUp from '@/components/ModalPupUp'


export default function Home() {
  return (
    <main className="">
      <Header/>
      <SimpleSlider/>
      <Services/>
      <Brands/>
      <ShelfProduct/>
      <NewCollection/>
      <Newsletter/>
      <Footer/>
      <ModalPopUp />
    </main>
  )
}
