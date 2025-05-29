import { PhoneSectionListingItemType } from "../../types/types"
import SectionTitle from "../Reusables/SectionTitle/SectionTitle"
import styles from "./PhoneSectionStyles.module.css"

const dummyListings:PhoneSectionListingItemType[] = [{
    id: 1,
    icon: "/list.png",
    title: 'Lorem ipsum Dolor',
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
},
{
    id: 2,
    icon: "/img.png",
    title: 'Dolor Ipsum Lorem',
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
},
{
    id: 3,
    icon: "/ticket.png",
    title: 'Ipsum Lorem Dolor',
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
},]

const PhoneSection = () => {
  return (
    <section className={styles.phoneSection}>
        <SectionTitle text="Instant Messaging für mühelose Buchunge"/>

        <div className={styles.phoneImg}>

        </div>


        <div className={styles.lister}>
            {dummyListings.map(item => <div key={item.id} className={styles.singleItem}>
                <img src={item.icon} alt={item.title} className={styles.icon}/>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.desc}>{item.desc}</p>
            </div>)}
        </div>
    </section>
  )
}

export default PhoneSection
