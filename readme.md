# Monday.com API + Node.js

Example of simple authentication and query.

See `index.js` and comments within.

## Set up and run

1. Clone the repo and `cd` into the project folder

1. Make a `.env` file

    ```
    % touch .env
    ```

1. Add your [Monday.com API token](https://monday.com/developers/v2#authentication-section) in the `.env` file

    ```
    MONDAY_TOKEN=your_key_goes_here
    ```

1. Install Node modules

    ```
    % npm install
    ```

1. Run the script

    ```
    % npm start

    {
        boards: [
            { id: '#########', name: 'Board name' },
            { id: '#########', name: 'Board name' },
            { id: '#########', name: 'Board name' },
            { id: '#########', name: 'Board name' },
            { id: '#########', name: 'Board name' }
        ]
    }
    ```
