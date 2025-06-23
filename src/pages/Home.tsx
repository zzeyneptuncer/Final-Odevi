import { useState } from 'react'
import '../App.css'

import BershkaLogo from '../assets/Bershka.png'
import ChanelLogo from '../assets/Chanel.png'
import DiorLogo from '../assets/Dior.png'
import GapLogo from '../assets/Gap.png'
import HMLogo from '../assets/HM.png'
import LouisVuittonLogo from '../assets/LouisVuitton.png'
import MangoLogo from '../assets/Mango.png'
import PullBearLogo from '../assets/PullBear.png'
import StradivariusLogo from '../assets/Stradivarius.png'
import ZaraLogo from '../assets/zara.png'
import AdidasLogo from '../assets/Adidas.png'
import DeFactoLogo from'../assets/DeFacto.png'
import HummelLogo from'../assets/Hummel.png'
import LCWaikikiLogo from'../assets/LCWaikiki.jpg'
import MaviLogo from'../assets/Mavi.png'
import NikeLogo from'../assets/Nike.png'
import OyshoLogo from'../assets/Oysho.png'
import PumaLogo from '../assets/Puma.png'
import TrendyolLogo from'../assets/Trendyol.png'
import UnderArmourLogo from'../assets/UnderArmour.png'



const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const stores = [
    { name: 'Zara', logo: ZaraLogo, url: 'https://www.zara.com/tr/' },
    { name: 'H&M', logo: HMLogo, url: 'https://www2.hm.com/' },
    { name: 'Stradivarius', logo: StradivariusLogo, url: 'https://www.stradivarius.com/' },
    { name: 'Pull & Bear', logo: PullBearLogo, url: 'https://www.pullandbear.com/' },
    { name: 'Louis Vuitton', logo: LouisVuittonLogo, url: 'https://www.louisvuitton.com/' },
    { name: 'GAP', logo: GapLogo, url: 'https://www.gap.com/' },
    { name: 'Bershka', logo: BershkaLogo, url: 'https://www.bershka.com/' },
    { name: 'Chanel', logo: ChanelLogo, url: 'https://www.chanel.com/tr/' },
    { name: 'Dior', logo: DiorLogo, url: 'https://www.dior.com/' },
    { name: 'Mango', logo: MangoLogo, url: 'https://shop.mango.com/tr/tr' },
    { name: 'Adidas', logo: AdidasLogo  , url:'https://www.adidas.com.tr/tr'},
    { name: 'DeFacto', logo: DeFactoLogo  , url:'https://www.defacto.com.tr/'},
    { name: 'LCWaikiki', logo: LCWaikikiLogo , url:'http://lcw.com/'},
    { name: 'Hummel', logo: HummelLogo , url:'https://hummel.com.tr/'},
    { name: 'Mavi', logo: MaviLogo , url:'https://www.mavi.com/'},
    { name: 'Nike', logo: NikeLogo , url:'https://www.nike.com/tr/'},
    { name: 'Oysho', logo: OyshoLogo , url:'https://www.oysho.com/tr/'},
    { name: 'Puma', logo: PumaLogo , url:'https://tr.puma.com/'},
    { name: 'Trendyol', logo: TrendyolLogo , url:'https://www.trendyol.com/butik/liste/1/kadin'},
    { name: 'Under Armour', logo: UnderArmourLogo , url:'https://www.underarmour.com.tr/'}

  ]

  const filteredStores = stores.filter(store =>
    store.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="home-container">
      <h1 className="home-title">Alışveriş Siteleri</h1>

      <input
        type="text"
        placeholder="Marka ara..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="store-grid">
        {filteredStores.map((store) => (
          <a
            key={store.name}
            href={store.url}
            target="_blank"
            rel="noopener noreferrer"
            className="store-card"
          >
            <img
              src={store.logo}
              alt={store.name}
              className="store-logo"
            />
            <span>{store.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Home
