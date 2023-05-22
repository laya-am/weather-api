export default function List({ typeOfList, activities}) {
        console.log("here are the activities",activities);
        return (
            <div>
                <h3>Activities for {typeOfList} Weather</h3>
                <ul>
                {activities?.map(activity =>{
                    if (activity.typeOfWeather === typeOfList){
                    return <li key={activity.id}>{activity.newActivity}</li>
                    }
                })}
                </ul>
            </div>
        );
}
