import './App.css';
import ServiceList from './components/ServiceList/ServiceList';
import ServiceAdd from './components/ServiceAdd/ServiceAdd';

export default function App() {
  return (
    <div className="App">
      <ServiceAdd />
      <ServiceList />
    </div>
  );
}
