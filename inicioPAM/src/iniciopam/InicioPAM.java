/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package iniciopam;
import javax.swing.JFrame;
/**
 *
 * @author May
 */
public class InicioPAM {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        inicioGUI in= new inicioGUI();
        in.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);//cierra el programa cuando cierra ventana
        in.setSize(500,200);//
        in.setVisible(true);
    }
    
}
