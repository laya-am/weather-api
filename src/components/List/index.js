export default function List({ typeOfList, activities }) {
    console.log(activities);
    return (
        <div>
            <h3>Activities for {typeOfList} Weather</h3>
            <ul>
                {activities.map(
                    (activity) =>
                        activity.typeOfWeather === typeOfList && (
                            <li key={activity.id}>{activity.newActivity}</li>
                        )
                )}
            </ul>
        </div>
    );
}
