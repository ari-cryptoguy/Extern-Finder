import React, { Component } from 'react';
import { Row, Col, Button, ButtonGroup, Card, Input, Label, Container } from "reactstrap";
import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Components
import EmailSidebar from "./email-sidebar";
import EmailToolBar from "./email-toolbar";

class EmailInbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Email", link : "#" },
                { title : "Inbox", link : "#" },
            ],
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Inbox" breadcrumbItems={this.state.breadcrumbItems} />
                        
                        <Row>
                            <Col xs={12}>
                                {/*Left sidebar  */}
                                <EmailSidebar/>
        
        
                                {/*  Right Sidebar */}
                                <div className="email-rightbar mb-3">
                                    
                                    <Card>
                                        
                                        {/* toolbar */}
                                        <EmailToolBar/>
                                        <ul className="message-list">
                                            <li>
                                                <div className="col-mail col-mail-1">
                                                    <div className="checkbox-wrapper-mail">
                                                        <Input type="checkbox" id="chk19"/>
                                                        <Label htmlFor="chk19" className="toggle"></Label>
                                                    </div>
                                                    <Link to="#" className="title">Peter, me (3)</Link><span className="star-toggle far fa-star"></span>
                                                </div>
                                                <div className="col-mail col-mail-2">
                                                    <Link to="#" className="subject">Hello – <span className="teaser">Trip home from Colombo has been arranged, then Jenna will come get me from Stockholm. :)</span>
                                                    </Link>
                                                    <div className="date">Mar 6</div>
                                                </div>
                                            </li>
                
                                            <li>
                                                <div className="col-mail col-mail-1">
                                                    <div className="checkbox-wrapper-mail">
                                                        <Input type="checkbox" id="chk20"/>
                                                        <Label htmlFor="chk20" className="toggle"></Label>
                                                    </div>
                                                    <Link to="#" className="title">me, Susanna (7)</Link><span className="star-toggle far fa-star"></span>
                                                </div>
                                                <div className="col-mail col-mail-2">
                                                    <Link to="#" className="subject"><span className="badge-warning badge mr-2">Freelance</span>Since you asked... and i'm
                                                        inconceivably bored at the train station –
                                                        <span className="teaser">Alright thanks. I'll have to re-book that somehow, i'll get back to you.</span>
                                                    </Link>
                                                    <div className="date">Mar. 6</div>
                                                </div>
                                            </li>
        
                                            <li>
                                                <div className="col-mail col-mail-1">
                                                    <div className="checkbox-wrapper-mail">
                                                        <Input type="checkbox" id="chk6"/>
                                                        <Label htmlFor="chk6" className="toggle"></Label>
                                                    </div>
                                                    <Link to="#" className="title">Web Support Dennis</Link><span className="star-toggle far fa-star"></span>
                                                </div>
                                                <div className="col-mail col-mail-2">
                                                    <Link to="#" className="subject">Re: New mail settings – 
                                                        <span className="teaser">Will you answer him asap?</span>
                                                    </Link>
                                                    <div className="date">Mar 7</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="col-mail col-mail-1">
                                                    <div className="checkbox-wrapper-mail">
                                                        <Input type="checkbox" id="chk7"/>
                                                        <Label htmlFor="chk7" className="toggle"></Label>
                                                    </div>
                                                    <Link to="#" className="title">me, Peter (2)</Link><span className="star-toggle far fa-star"></span>
                                                </div>
                                                <div className="col-mail col-mail-2">
                                                    <Link to="#" className="subject"><span className="badge-info badge mr-2">Support</span>Off on Thursday - 
                                                        <span className="teaser">Eff that place, you might as well stay here with us instead! Sent from my iPhone 4  4 mar 2014 at 5:55 pm</span>
                                                    </Link>
                                                    <div className="date">Mar 4</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="col-mail col-mail-1">
                                                    <div className="checkbox-wrapper-mail">
                                                        <Input type="checkbox" id="chk8"/>
                                                        <Label htmlFor="chk8" className="toggle"></Label>
                                                    </div>
                                                    <Link to="#" className="title">Medium</Link><span className="star-toggle far fa-star"></span>
                                                </div>
                                                <div className="col-mail col-mail-2">
                                                    <Link to="#" className="subject"><span className="badge-primary badge mr-2">Social</span>This Week's Top Stories – 
                                                        <span className="teaser">Our top pick for you on Medium this week The Man Who Destroyed America’s Ego</span>
                                                    </Link>
                                                    <div className="date">Feb 28</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="col-mail col-mail-1">
                                                    <div className="checkbox-wrapper-mail">
                                                        <Input type="checkbox" id="chk9"/>
                                                        <Label htmlFor="chk9" className="toggle"></Label>
                                                    </div>
                                                    <Link to="#" className="title">Death to Stock</Link><span className="star-toggle far fa-star"></span>
                                                </div>
                                                <div className="col-mail col-mail-2">
                                                    <Link to="#" className="subject">Montly High-Res Photos – 
                                                        <span className="teaser">To create this month's pack, we hosted a party with local musician Jared Mahone here in Columbus, Ohio.</span>
                                                    </Link>
                                                    <div className="date">Feb 28</div>
                                                </div>
                                            </li>
        
                                            <li className="unread">
                                                <div className="col-mail col-mail-1">
                                                    <div className="checkbox-wrapper-mail">
                                                        <Input type="checkbox" id="chk3"/>
                                                        <Label htmlFor="chk3" className="toggle"></Label>
                                                    </div>
                                                    <Link to="#" className="title">Randy, me (5)</Link><span className="star-toggle far fa-star"></span>
                                                </div>
                                                <div className="col-mail col-mail-2">
                                                    <Link to="#" className="subject"><span className="badge-success badge mr-2">Family</span>Last pic over my village – 
                                                        <span className="teaser">Yeah i'd like that! Do you remember the video you showed me of your train ride between Colombo and Kandy? The one with the mountain view? I would love to see that one again!</span>
                                                    </Link>
                                                    <div className="date">5:01 am</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="col-mail col-mail-1">
                                                    <div className="checkbox-wrapper-mail">
                                                        <Input type="checkbox" id="chk4"/>
                                                        <Label htmlFor="chk4" className="toggle"></Label>
                                                    </div>
                                                    <Link to="#" className="title">Andrew Zimmer</Link><span className="star-toggle far fa-star"></span>
                                                </div>
                                                <div className="col-mail col-mail-2">
                                                    <Link to="#" className="subject">Mochila Beta: Subscription Confirmed
                                                        – <span className="teaser">You've been confirmed! Welcome to the ruling class of the inbox. For your records, here is a copy of the information you submitted to us...</span>
                                                    </Link>
                                                    <div className="date">Mar 8</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="col-mail col-mail-1">
                                                    <div className="checkbox-wrapper-mail">
                                                        <Input type="checkbox" id="chk5"/>
                                                        <Label htmlFor="chk5" className="toggle"></Label>
                                                    </div>
                                                    <Link to="#" className="title">Infinity HR</Link><span className="star-toggle far fa-star"></span>
                                                </div>
                                                <div className="col-mail col-mail-2">
                                                    <Link to="#" className="subject">Sveriges Hetaste sommarjobb –
                                                        <span className="teaser">Hej Nicklas Sandell! Vi vill bjuda in dig till "First tour 2014", ett rekryteringsevent som erbjuder jobb på 16 semesterorter iSverige.</span>
                                                    </Link>
                                                    <div className="date">Mar 8</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="col-mail col-mail-1">
                                                    <div className="checkbox-wrapper-mail">
                                                        <Input type="checkbox" id="chk10"/>
                                                        <Label htmlFor="chk10" className="toggle"></Label>
                                                    </div>
                                                    <Link to="#" className="title">Revibe</Link><span className="star-toggle far fa-star"></span>
                                                </div>
                                                <div className="col-mail col-mail-2">
                                                    <Link to="#" className="subject"><span className="badge-danger badge mr-2">Friends</span>Weekend on Revibe – 
                                                        <span className="teaser">Today's Friday and we thought maybe you want some music inspiration for the weekend. Here are some trending tracks and playlists we think you should give a listen!</span>
                                                    </Link>
                                                    <div className="date">Feb 27</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="col-mail col-mail-1">
                                                    <div className="checkbox-wrapper-mail">
                                                        <Input type="checkbox" id="chk11"/>
                                                        <Label htmlFor="chk11" className="toggle"></Label>
                                                    </div>
                                                    <Link to="#" className="title">Erik, me (5)</Link><span className="star-toggle far fa-star"></span>
                                                </div>
                                                <div className="col-mail col-mail-2">
                                                    <Link to="#" className="subject">Regarding our meeting – 
                                                        <span className="teaser">That's great, see you on Thursday!</span>
                                                    </Link>
                                                    <div className="date">Feb 24</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="col-mail col-mail-1">
                                                    <div className="checkbox-wrapper-mail">
                                                        <Input type="checkbox" id="chk12"/>
                                                        <Label htmlFor="chk12" className="toggle"></Label>
                                                    </div>
                                                    <Link to="#" className="title">KanbanFlow</Link><span className="star-toggle far fa-star"></span>
                                                </div>
                                                <div className="col-mail col-mail-2">
                                                    <Link to="#" className="subject"><span className="badge-primary badge mr-2">Social</span>Task assigned: Clone ARP's website
                                                        – <span className="teaser">You have been assigned a task by Alex@Work on the board Web.</span>
                                                    </Link>
                                                    <div className="date">Feb 24</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="col-mail col-mail-1">
                                                    <div className="checkbox-wrapper-mail">
                                                        <Input type="checkbox" id="chk13"/>
                                                        <Label htmlFor="chk13" className="toggle"></Label>
                                                    </div>
                                                    <Link to="#" className="title">Tobias Berggren</Link><span className="star-toggle far fa-star"></span>
                                                </div>
                                                <div className="col-mail col-mail-2">
                                                    <Link to="#" className="subject">Let's go fishing! – 
                                                        <span className="teaser">Hey, You wanna join me and Fred at the lake tomorrow? It'll be awesome.</span>
                                                    </Link>
                                                    <div className="date">Feb 23</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="col-mail col-mail-1">
                                                    <div className="checkbox-wrapper-mail">
                                                        <Input type="checkbox" id="chk14"/>
                                                        <Label htmlFor="chk14" className="toggle"></Label>
                                                    </div>
                                                    <Link to="#" className="title">Charukaw, me (7)</Link><span className="star-toggle far fa-star"></span>
                                                </div>
                                                <div className="col-mail col-mail-2">
                                                    <Link to="#" className="subject">Hey man – <span className="teaser">Nah man sorry i don't. Should i get it?</span>
                                                    </Link>
                                                    <div className="date">Feb 23</div>
                                                </div>
                                            </li>
                                            <li className="unread">
                                                <div className="col-mail col-mail-1">
                                                    <div className="checkbox-wrapper-mail">
                                                        <Input type="checkbox" id="chk15"/>
                                                        <Label htmlFor="chk15" className="toggle"></Label>
                                                    </div>
                                                    <Link to="#" className="title">me, Peter (5)</Link><span className="star-toggle far fa-star"></span>
                                                </div>
                                                <div className="col-mail col-mail-2">
                                                    <Link to="#" className="subject"><span className="badge-info badge mr-2">Support</span>Home again! – <span className="teaser">That's just perfect! See you tomorrow.</span>
                                                    </Link>
                                                    <div className="date">Feb 21</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="col-mail col-mail-1">
                                                    <div className="checkbox-wrapper-mail">
                                                        <Input type="checkbox" id="chk16"/>
                                                        <Label htmlFor="chk16" className="toggle"></Label>
                                                    </div>
                                                    <Link to="#" className="title">Stack Exchange</Link><span className="star-toggle far fa-star"></span>
                                                </div>
                                                <div className="col-mail col-mail-2">
                                                    <Link to="#" className="subject">1 new items in your Stackexchange inbox
                                                        – <span className="teaser">The following items were added to your Stack Exchange global inbox since you last checked it.</span>
                                                    </Link>
                                                    <div className="date">Feb 21</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="col-mail col-mail-1">
                                                    <div className="checkbox-wrapper-mail">
                                                        <Input type="checkbox" id="chk17"/>
                                                        <Label htmlFor="chk17" className="toggle"></Label>
                                                    </div>
                                                    <Link to="#" className="title">Google Drive Team</Link><span className="star-toggle far fa-star"></span>
                                                </div>
                                                <div className="col-mail col-mail-2">
                                                    <Link to="#" className="subject">You can now use your storage in Google
                                                        Drive – <span className="teaser">Hey Nicklas Sandell! Thank you for purchasing extra storage space in Google Drive.</span>
                                                    </Link>
                                                    <div className="date">Feb 20</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="col-mail col-mail-1">
                                                    <div className="checkbox-wrapper-mail">
                                                        <Input type="checkbox" id="chk18"/>
                                                        <Label htmlFor="chk18" className="toggle"></Label>
                                                    </div>
                                                    <Link to="#" className="title">me, Susanna (11)</Link><span className="star-toggle far fa-star"></span>
                                                </div>
                                                <div className="col-mail col-mail-2">
                                                    <Link to="#" className="subject">Train/Bus – <span className="teaser">Yes ok, great! I'm not stuck in Stockholm anymore, we're making progress.</span>
                                                    </Link>
                                                    <div className="date">Feb 19</div>
                                                </div>
                                            </li>
        
                                        </ul>
        
                                    </Card>
        
                                    <Row>
                                        <Col xs={7}>
                                            Showing 1 - 20 of 1,524
                                        </Col>
                                        <Col xs={5}>
                                            <ButtonGroup className="float-right">
                                                <Button type="button" size="sm" color="success" className="waves-effect"><i className="fa fa-chevron-left"></i></Button>
                                                <Button type="button" size="sm" color="success" className="waves-effect"><i className="fa fa-chevron-right"></i></Button>
                                            </ButtonGroup>
                                        </Col>
                                    </Row>
        
                                </div> 
        
                            </Col>
        
                        </Row>
                    </Container> 
                </div>
            </React.Fragment>
        );
    }
}

export default EmailInbox;