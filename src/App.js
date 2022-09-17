import { notificationDeities } from './contract/contract';

function App() {
  return (
    <div className="container">
      <section className='section'>
        <div className='notificationTitle'>
          <h4>
            Notifications <span>3</span>
          </h4>
          <p>Mark all as read</p>
        </div>
        <div className='grid'>
          {notificationDeities.map((item) => (

            <div key={item.id} className='content'>
              <div style={item.read ? { backgroundColor: 'white' } : { backgroundColor: '' }} className='maine'>
                <div className='information'>
                  <div className='content_profile'>

                    <img src={item.user} alt="" />
                  </div>
                  < div className='foods'>
                    <p>{item.name}
                      <span style={item.do ? { display: 'inline-block' } : { display: 'none' }}>{item.do}</span> <b style={item.who ? { display: 'inline-block' } : { display: 'none' }}>{item.who}</b>
                      <i style={!item.read ? { display: 'inline-block' } : { display: 'none' }} class="material-symbols-outlined">
                      </i>

                    </p>
                    <small>{item.time}</small>
                  </div>
                </div>
                <div style={item.commented ? { display: 'inline-block' } : { display: 'none' }} className='content_profile'>
                  <img src={item.commented} alt="" />
                </div>
              </div>
              <div style={item.messene ? { display: 'inline-block' } : { display: 'none' }} className='messene'>
                <p>{item.messene}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default App;
