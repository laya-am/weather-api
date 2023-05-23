import "./List.css";

export default function List({ typeOfList, activities, onDelete }) {
    return (
            <ul className="list">
                {activities.map(
                    (activity) =>
                        activity.typeOfWeather === typeOfList && (
                            <li key={activity.id}>
                                {activity.newActivity}{" "}
                                <button onClick={() => onDelete(activity.id)}>
                                    X
                                </button>
                            </li>
                        )
                )}
            </ul>
    );
}
