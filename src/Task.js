export default class Task {
    constructor( title, date, description ) {
        this.setTitle( title );
        this.setDate( date );
        this.setDescription( description );
    }

    setTitle( title ) {
        if ( title.length < 5 )
            throw new Error("Title must be at least 5 chars");

        this.title = title;
    }

    getTitle() {
        return this.title;
    }

    setDescription( description ) {
        this.description = description;
    }

    getDescription() {
        return this.description;
    }

    setDate( date ) {
        // if ( date instanceof Date == false )
        //     throw new Error('Invalid date, date must be instance of date');

        this.date = date;
    }

    getDate() {
        return this.date;
    }

    toString() {
        let date = this.date.toString();
        return `Task: ${this.title} at ${date}; ${this.description}`;
    }
}