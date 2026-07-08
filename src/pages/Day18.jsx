import Navbar from "../components/Navbar"
import DashboardDisplay from "../day18/components/DashboardDisplay"
import ProductDisplay from "../day18/components/ProductDisplay"
import ProfileDisplay from "../day18/components/ProfileDisplay"
import ShoppingDisplay from "../day18/components/ShoppingDisplay"
import StudentDisplay from "../day18/components/StudentDisplay"
import ThemeCard from "../day18/components/ThemeCard"
import ThemeHeader from "../day18/components/ThemeHeader"
import ThemeSidebar from "../day18/components/ThemeSidebar"
import PageLayout from "../PageLayout"

const Day18 = () => {
  return (
    <>
    <PageLayout>
    <Navbar/>

<div className="bg-indigo-300">
    <section className="py-16">
    <ProfileDisplay />
    </section>

<section className="py-16">
  <ProductDisplay />
</section>

<section className="bg-gray-100 py-12 px-6 flex justify-center mx-30 rounded-2xl flex-col gap-10 ">
  <ThemeHeader />

  
    <ThemeSidebar />
    <ThemeCard />

</section>

<section className="py-16">
  <StudentDisplay />
</section>

<section className="py-16">
  <ShoppingDisplay />
</section>

<section className="py-16">
  <DashboardDisplay />
</section>

</div>

</PageLayout>
    </>
  )
}

export default Day18