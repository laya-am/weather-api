import "./List.css";

export default function List({ typeOfList, activities, onDelete, listClass }) {
    return (
        <div className={`list ${listClass}`}>
            <h4 className="list-title">Activities for {typeOfList} Weather:</h4>
            <ul >
                {activities.map(
                    (activity) =>
                        activity.typeOfWeather === typeOfList && (
                            <li className="list-item" key={activity.id}>
                                {activity.newActivity}{" "}
                                <button className="button-delete" onClick={() => onDelete(activity.id)}>
                                    X
                                </button>
                            </li>
                        )
                )}
            </ul>
        </div>
    );
}
