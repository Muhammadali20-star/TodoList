import React, { useState, type ChangeEvent, type FormEvent } from 'react'

type Person = {
  id: number;
  title: string;
  description: string;
};

const Header = () => {
  const [data, setData] = useState({ title: '', description: '' });
  const [person, setPerson] = useState<Person[]>([]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>)=>{
      event.preventDefault()
      const newPerson: Person = {
        id: Date.now(),
        title: data.title,
        description: data.description,
      };
      setPerson(prev => [...prev, newPerson]);
      setData({
         title: '',
         description: '' 
      });
  }
  
  const handleDelete = (id: number) => {
    setPerson(prev => prev.filter(item => item.id !== id));
  };

 const handlechange = (event: ChangeEvent<HTMLInputElement>)=>{
  const { name, value } = event.target;
  setData(prev => ({ ...prev, [name]: value }));
  }
  return (
    <div>
        <h2>Header</h2>
        <form onSubmit={handleSubmit} action="">
          <input name="title" placeholder="Title" value={data.title} onChange={handlechange} type="text" />
          <input name="description" placeholder="Description" value={data.description} onChange={handlechange} type="text" />
          <button type='submit'>Create</button>
        </form>
        <ul  style={{listStyleType: 'none'}}>
        {person.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong>: {item.description}
            <button onClick={()=> handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default React.memo(Header)