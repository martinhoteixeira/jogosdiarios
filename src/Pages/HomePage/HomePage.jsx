import "./HomePage.css"
import Header from "../../components/Header/Header"
import GameList from "../../components/Games/GameList/GameList"

export default function HomePage() {
    return (
        <div>
            <Header />
            <GameList />
        </div>
    )
}