import React from 'react'
import { NavLink } from 'react-router-dom'
import './NewProduct.scss'
import apple from '../../assets/icons/new__product/appleIcon.svg'
import arrow from '../../assets/icons/new__product/arrow.svg'
import repair from '../../assets/icons/new__product/repair.svg'
import like from '../../assets/icons/new__product/likeIco.svg'

const NewProduct = () => {
  return (
    <div className='new__product'>
      <div className="container">
        <div className="new__product__inner">
          <div className="re-store__reseller">
            <div className="re-store-reseller__title">
              <span>re:Store —</span>
              крупнейшая сеть
              <span>Apple Premium Reseller</span>
              в России
            </div>
            <div className="re-store-reseller__advantages">
              <div className="flex advantages">
                <div className="flex__row">
                  <NavLink to="#" className="flex__item">
                    <img className='icon__feature' src={apple} alt="apple" />
                    <h3 className='advantages__item__title'>Официальный реселлер Apple</h3>
                    <p className='advantages__item__text'>Крупнейшая сеть Apple Premium Reseller в мире, открыты
                      95 магазинов в России. Наши продавцы прошли сертификацию
                      Apple.</p>
                  </NavLink>
                  <NavLink to="#" className="flex__item">
                    <img className='icon__feature' src={arrow} alt="arrow" />
                    <h3 className='h3 advantages__item__title'> Обмен в течение 30 дней</h3>
                    <p className='advantages__item__text'>Мы осуществляем обмен в любом магазине re:Store
                      в течение 30 дней с момента покупки.</p>
                  </NavLink>
                  <NavLink to="#" className="flex__item">
                    <img className='icon__feature'src={repair} alt="repair" />
                    <h3 className='h3 advantages__item__title'> Авторизованные <br /> сервисные центры Apple</h3>
                    <p className='advantages__item__text'>Все специалисты прошли сертификацию Apple и готовы решить
                      проблему любой сложности.</p>
                  </NavLink>
                  <NavLink to="#" className="flex__item">
                    <img  className='icon__feature'src={like} alt="like" />
                    <h3 className='h3 advantages__item__title'>Услуги</h3>
                    <p className='advantages__item__text'>
                      Рассрочка, сервисные программы, срочная доставка, подписка на iPhone и
                      многие другие услуги для клиентов re:Store
                    </p>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="seo__text">
          <h3 className="seo__text__title">Техника Apple и аксессуары</h3>
          <p>re:Store (реСтор) — официальный партнер компании Apple в России и Европе, имеющий статус премиум-реселлера Apple Premium Reseller.</p>
          <p>re:Store — это не просто магазин, но и центр обслуживания, место, куда вы можете прийти, чтобы посоветоваться, выбрать подходящее устройство, где вас научат пользоваться им, дадут советы по эксплуатации и покажут возможности того, что вы приобрели.</p>
          <p>Мы продаем только официальные версии с легальной русской прошивкой, что избавляет клиентов от множества проблем</p>
          <p>Наши продавцы — это специалисты в своей области. А качественная, удобная, простая в использовании техника от Apple доставляет удовольствие своим пользователям и редко требует какой-либо технической поддержки.</p>
          <p>Мы продаем компьютеры, клавиатуры, мышки, мониторы, плееры, телефоны и многое другое. Мы работаем, чтобы вам было удобно. Центры продаж техники Apple расположены по всей России. Вы можете прийти, чтобы лично ознакомиться с тем или иным устройством. У нас предусмотрена и возможность заказа через интернет. Как покупать — выбор за вами!</p>
        </div>
      </div>
    </div>
  )
}

export default NewProduct