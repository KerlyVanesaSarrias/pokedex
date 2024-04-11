
import "./style/PaginationPokedex.css"
import { GrChapterPrevious } from "react-icons/gr";
import { GrChapterNext } from "react-icons/gr";


const PaginationPokedex = ({ totalPage, currentPage, onNextPage, onPreviusPage }) => {
    const totalPageArray = Array.from({ length: totalPage }, (_, index) => index + 1);

    console.log(totalPageArray)
    
    return (

        <nav className="pagination">
            <button className="pagination-previous"  onClick={onPreviusPage}><GrChapterPrevious /></button>
            <ul className="pagination-list">
                <li>
                    <a className="pagination-link" >{currentPage}</a>
                </li>
            </ul>
            <button className="pagination-next" onClick={currentPage===totalPageArray.length ? undefined: onNextPage}><GrChapterNext /></button>
        </nav>

    )
}

export default PaginationPokedex