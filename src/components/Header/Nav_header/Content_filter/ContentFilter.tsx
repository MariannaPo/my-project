import React from "react";


const ContentFilter = () => {
    return (
        <form>
            <label>
                Filter:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Выбрать" />
        </form>
    )
}

export default ContentFilter;

