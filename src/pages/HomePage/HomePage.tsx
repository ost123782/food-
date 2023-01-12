import './HomePage.scss'
import adImg from '../../assets/png-transparent-organic-food-vegetable-fruit-mediterranean-cuisine-raizes-natural-foods-leaf-vegetable-kitchen.png'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import PopupMain from '../../components/PopupMain/PopupMain'

const HomePage = () => {

    return (
        <div className="container">
            <Header />
            <main className="main">
                <div className="main-adv">
                    <img
                       width="500px"
                       src={adImg}
                       alt="vegetables"
                    />
                    <p className="main-advirestment">Купляйте свіжі овочі прямо з грядки!</p>
                </div>
                <div className="main-about">
                    <h1>Про нас</h1>
                    <p>
                        Ми - компанія 'FreshGreen', яка на ринку здорового харчування вже 10
                        років! За ці 10 років ми вдосконалили наш талант - вирощувати овочі, для
                        тих кому вони потрібні.
                    </p>
                </div>
                <div className="main-popular">
                    <h1>Популярне зараз</h1>
                    <div className="main-cards">
                        {/* <ProductCard />
                        <ProductCard />
                        <ProductCard /> */}
                    </div>
                </div>
            </main>
            <Footer/>
            <PopupMain />
        </div>

    )
}

export default HomePage