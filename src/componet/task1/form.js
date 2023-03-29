import React from "react";
function Fo(){
      return(
        <div class="form">
        <form>
            <h1>Form Buliding</h1>
        <table id="sign">
        
                <thead>
                    <tr>
                        <th colspan="4" Signup ></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <label> First Name </label>
                        </td>
                        <td>
                            <input type="text" placeholder="Enter First Name"/>
                        </td>


                    </tr>
                    <tr>
                        <td>
                            <label> Last Name </label>
                        </td>
                        <td>
                            <input type="text" placeholder="Enter Last Name"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Date of Birth</label>
                        </td>
                        <td>
                            <select>
                                <option>date</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                            </select>
                            <select>
                                <option>Month</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </select>
                            <select>
                                <option>Year</option>
                                <option>2000</option>
                                <option>2001</option>
                                <option>2001</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Gender</label>
                        </td>
                        <td>

                            <input type="radio" name="gender" id="gender" value="Male"/> Male
                            <input type="radio" name="geder" id="gender" value="Female"/>Female
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Country</label>
                        </td>
                        <td>
                            <select>
                                <option>Country</option>
                                <option>India</option>
                                <option>Africa</option>
                                <option>South Africa</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>E-mail</label>
                        </td>
                        <td>
                            <input type="email" id="E-mail" name="E-mail" vale="E-mail" placeholder="Enter E-mail"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Phone</label>
                        </td>
                        <td>
                            <input type="number" id="number" name="Phone_no" value="Phone_no" placeholder="Enter Phone" minlength="10"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Password</label>
                        </td>
                        <td>
                            <input type="password"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Confirm Password</label>
                        </td>
                        <td>
                            <input type="password"/>
                        </td>
                        </tr>
                    <tr>
                        <td>
                            
                            <button type="submit">submit</button>
                            <button type="cancel">cancel</button>
                            
                        </td>
                    </tr>
                </tbody>
            </table>
    </form>

    </div>

      )


}

    export default Fo;