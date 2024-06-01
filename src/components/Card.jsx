
const Card = ({ Texto }) => {
    return (
        <div className="card">
            <img src="https://picsum.photos/id/237/200/300" className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">{ Texto }</p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    );
};

export default Card;