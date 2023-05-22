export default function List({ typeOfWeather, newActivity, typeOfList }) {
    if (typeOfWeather === typeOfList)
        return (
            <ul>
                <li>go outside</li>
                <li>read a book</li>
                <li>hang out with Lucas</li>
            </ul>
        );
}
