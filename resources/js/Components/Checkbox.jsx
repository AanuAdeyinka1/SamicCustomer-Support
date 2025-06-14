export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-gray-300 text-green-600 shadow-sm focus:ring-green-500 dark:border-green-500 dark:bg-green-900 dark:focus:ring-green-600 dark:focus:ring-offset-gray-800 ' +
                className
            }
        />
    );
}
