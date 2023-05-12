import SearchPage from '../components/SearchForm'



    const Home = ({handleSelectedFlight}) => {
  return (
    <div>
    <SearchPage handleSelectedFlight={handleSelectedFlight}/>
    </div>
  )
}

export default Home