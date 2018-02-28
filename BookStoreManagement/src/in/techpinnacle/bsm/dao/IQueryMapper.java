package in.techpinnacle.bsm.dao;

public interface IQueryMapper {

	public static final String ADD_BOOK_QRY = 
			"INSERT INTO books VALUES(?,?,?,?,?,?)";
	public static final String MODIFY_BOOK_QRY = 
			"UPDATE books SET title=?,price=?,vol=?,pdate=?,zonar=? WHERE bcode=?";
	public static final String DEL_BOOK_QRY = 
			"DELETE FROM books WHERE bcode=?";
	public static final String GET_ALL_BOOKS_QRY = 
			"SELECT * FROM books";
	public static final String GET_BOOK_QRY = 
			"SELECT * FROM books WHERE bcode=?";
}
