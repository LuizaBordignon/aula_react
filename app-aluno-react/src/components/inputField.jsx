export default function InputField({label, type='text', value, onChange, placeholder, children}){
    return(
        <div>
            <label>
                {label} 
                {children}
            </label>
            <input 
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    )
}