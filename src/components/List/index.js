export default function List({ typeOfList, activities, onDelete }) {
    return (
        <div>
            <h3>Activities for {typeOfList} Weather</h3>
            <ul>
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
        </div>
    );
}
