import { useCallback } from "react";
import { LinearProgress, Box, CircularProgress } from "@mui/material";
import styled from "styled-components";

const Icon = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  position: relative;
`;
const StateLayer = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
`;
const Container = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const IconButton = styled.div`
  width: 0.438rem;
  height: 3rem;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const DesktopChiTitKpiChild = styled.div`
  width: 12.5rem;
  height: 12.5rem;
  position: relative;
  border-radius: 50%;
  background-color: #fff;
  border: 0px solid #000;
  box-sizing: border-box;
  display: none;
`;
const VIcon = styled.h2`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 100%;
  font-weight: 400;
  font-family: inherit;
  display: inline-block;
  min-width: 1.5rem;
`;
const Span = styled.div`
  width: 1.438rem;
  position: relative;
  line-height: 1.25rem;
  font-family: Roboto;
  color: rgba(0, 0, 0, 0.87);
  display: none;
`;
const Button = styled.div`
  border-radius: 40px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.75rem;
`;
const TrackAchieveExcel = styled.img`
  align-self: stretch;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  cursor: pointer;
`;
const AchieveExcelButton = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.137rem 0rem 0rem;
`;
const KPIButtons = styled.div`
  align-self: stretch;
  width: 12.063rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Divider = styled.div`
  align-self: stretch;
  height: 0.063rem;
  position: relative;
  border-top: 1px solid #dee3e5;
  box-sizing: border-box;
`;
const Divider1 = styled.div`
  width: 22.5rem;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  max-width: 100%;
`;
const FrameChild = styled.div`
  height: 2.313rem;
  width: 19.688rem;
  position: relative;
  border-radius: 40px;
  background-color: #f5f7fa;
  display: none;
`;
const SearchIcon = styled.img`
  height: 1rem;
  width: 1rem;
  position: relative;
  min-height: 1rem;
  z-index: 1;
`;
const TmKimG = styled.a`
  text-decoration: none;
  width: 9.844rem;
  position: relative;
  font-size: 0.938rem;
  letter-spacing: 0.5px;
  line-height: 1rem;
  font-weight: 500;
  font-family: Roboto;
  color: #006874;
  text-align: center;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
  @media screen and (max-width: 750px) {
    display: none;
  }
`;
const RectangleParent = styled.button`
  cursor: pointer;
  border: none;
  padding: 0.675rem 0.75rem 0.625rem;
  background-color: #f5f7fa;
  align-self: stretch;
  border-radius: 40px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 3rem;
  white-space: nowrap;
  &:hover {
    background-color: #dbdee0;
  }
`;
const SearchBar = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0rem 0rem 0.312rem;
`;
const IconssettingsFilled24px = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
const NotificationsIcon = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Button1 = styled.div`
  width: 2.769rem;
  height: 3rem;
  border-radius: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0rem 0.625rem;
  box-sizing: border-box;
`;
const NotificationButton = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0.25rem 0rem 0rem;
`;
const Span1 = styled.div`
  width: 1.438rem;
  position: relative;
  line-height: 1.25rem;
  display: none;
`;
const Button2 = styled.div`
  align-self: stretch;
  flex: 0.603;
  border-radius: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0rem 0.625rem;
`;
const UserImagesuserImages = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  position: relative;
  border-radius: 100px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Button3 = styled.div`
  border-radius: 40px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.375rem;
  cursor: pointer;
`;
const UserImagesButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.375rem 0rem 0rem;
`;
const SettingsButtons = styled.div`
  align-self: stretch;
  width: 9.688rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.806rem;
`;
const SearchDarkmode = styled.div`
  height: 3rem;
  width: 31.125rem;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 1.75rem;
  max-width: 100%;
  color: rgba(0, 0, 0, 0.87);
  font-family: Roboto;
`;
const AppbarContent = styled.header`
  width: 90rem;
  height: 3.5rem;
  background-color: #006874;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0.25rem 1rem 0.075rem;
  box-sizing: border-box;
  top: 0;
  z-index: 99;
  position: sticky;
  gap: 1.25rem;
  max-width: 100%;
  text-align: center;
  font-size: 1.5rem;
  color: #fff;
  font-family: "Material Icons";
`;
const Title = styled.div`
  align-self: stretch;
  height: 1.25rem;
  position: relative;
  letter-spacing: 0.1px;
  line-height: 1.25rem;
  font-weight: 500;
  display: flex;
  align-items: center;
`;
const Headline = styled.div`
  align-self: stretch;
  height: 3.5rem;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  box-sizing: border-box;
`;
const TrangCh = styled.div`
  height: 1.25rem;
  flex: 1;
  position: relative;
  letter-spacing: 0.1px;
  line-height: 1.25rem;
  font-weight: 500;
  display: inline-block;
  @media screen and (max-width: 450px) {
    font-size: 1rem;
    line-height: 1rem;
  }
`;
const BadgeLabelText = styled.div`
  width: 2rem;
  position: relative;
  font-size: 0.875rem;
  letter-spacing: 0.1px;
  line-height: 1.25rem;
  font-weight: 500;
  text-align: right;
  display: none;
`;
const StateLayer1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 1.5rem 1rem 1rem;
  box-sizing: border-box;
  gap: 0.75rem;
  max-width: 343%;
  flex-shrink: 0;
`;
const SectionHeader = styled.div`
  align-self: stretch;
  border-radius: 100px;
  overflow: hidden;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.25rem;
`;
const Icon1 = styled.img`
  height: 1.125rem;
  width: 1.125rem;
  position: relative;
`;
const LabelText = styled.div`
  height: 2rem;
  flex: 1;
  position: relative;
  line-height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 450px) {
    font-size: 1.188rem;
    line-height: 1.625rem;
  }
`;
const StateLayer2 = styled.div`
  width: 9.563rem;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.625rem 1.5rem 0.625rem 1rem;
  box-sizing: border-box;
  gap: 0.437rem;
`;
const NavItem = styled.div`
  width: 21rem;
  height: 3.5rem;
  border-radius: 100px;
  background-color: #006874;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  text-align: center;
  font-size: 1.5rem;
  color: #fff;
`;
const Label = styled.div`
  height: 1.25rem;
  flex: 1;
  position: relative;
  letter-spacing: 0.1px;
  line-height: 1.25rem;
  font-weight: 500;
  display: inline-block;
`;
const BadgeLabelText1 = styled.div`
  width: 2rem;
  position: relative;
  letter-spacing: 0.1px;
  line-height: 1.25rem;
  font-weight: 500;
  text-align: right;
  display: none;
`;
const NavItem1 = styled.div`
  align-self: stretch;
  border-radius: 100px;
  overflow: hidden;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const Divider2 = styled.div`
  align-self: stretch;
  height: 0.063rem;
  position: relative;
  border-top: 1px solid #bfc8ca;
  box-sizing: border-box;
`;
const Divider3 = styled.div`
  align-self: stretch;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0rem 1rem;
`;
const GraphBarIncreaseUpProductIcon = styled.img`
  width: 1.006rem;
  height: 0.988rem;
  position: relative;
`;
const GraphBarIncreaseUpProduct = styled.div`
  border-radius: 12px;
  background-color: #9eeffd;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.5rem;
`;
const Kpi = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: 0.15px;
  line-height: 1.5rem;
  font-weight: 500;
  color: inherit;
  display: inline-block;
  min-width: 1.625rem;
`;
const SectionHeader1 = styled.div`
  border-radius: 100px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.225rem 0.875rem 0.225rem 1.187rem;
  gap: 0.625rem;
  font-size: 1rem;
`;
const VectorIcon = styled.img`
  width: 1.25rem;
  height: 1.188rem;
  position: relative;
`;
const Label1 = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 1.5rem;
  font-weight: 500;
  display: inline-block;
  min-width: 4.5rem;
`;
const SectionHeader2 = styled.div`
  border-radius: 100px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0.687rem 1rem 0.937rem;
  gap: 0.625rem;
  cursor: pointer;
  font-size: 1rem;
`;
const NewsmodeIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Label2 = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 1.5rem;
  font-weight: 500;
  display: inline-block;
  min-width: 3.813rem;
`;
const SectionHeader3 = styled.div`
  border-radius: 100px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.125rem;
  gap: 0.625rem;
  font-size: 1rem;
`;
const NavigationDrawer = styled.div`
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  background-color: #eff5f6;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.75rem 0.75rem 44.25rem;
  @media screen and (max-width: 1025px) {
    display: none;
    padding-top: 1.25rem;
    padding-bottom: 28.75rem;
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    padding-bottom: 18.688rem;
    box-sizing: border-box;
  }
`;
const VBreadcrumbsItem = styled.div`
  position: relative;
  letter-spacing: 0.25px;
  line-height: 1.25rem;
  display: inline-block;
  min-width: 1.438rem;
  cursor: pointer;
`;
const BreadcrumbSeparator = styled.div`
  position: relative;
  letter-spacing: 0.25px;
  line-height: 1.25rem;
  display: inline-block;
  min-width: 0.375rem;
`;
const Divider4 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0.75rem;
  color: rgba(0, 0, 0, 0.6);
`;
const VBreadcrumbsItem1 = styled.div`
  position: relative;
  letter-spacing: 0.25px;
  line-height: 1.25rem;
  display: inline-block;
  min-width: 4.5rem;
`;
const Div = styled.div`
  position: relative;
  letter-spacing: 0.25px;
  line-height: 1.25rem;
`;
const Divider5 = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0rem 0.75rem;
  color: rgba(0, 0, 0, 0.6);
`;
const VBreadcrumbsItem2 = styled.div`
  align-self: stretch;
  width: 2.438rem;
  position: relative;
  letter-spacing: 0.25px;
  line-height: 1.25rem;
  color: rgba(0, 0, 0, 0.87);
  display: none;
  align-items: center;
  justify-content: center;
`;
const Breadcrumbs = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1.125rem 0.687rem 1.125rem 1.437rem;
`;
const Divider6 = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  border-top: 1px solid #3f484a;
  box-sizing: border-box;
  max-width: 100%;
`;
const HorizontalDarkinsetDark = styled.div`
  position: absolute;
  top: 3.438rem;
  left: 0.313rem;
  width: 75.375rem;
  height: 0.063rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem 0rem 1rem;
  box-sizing: border-box;
  max-width: 100%;
  z-index: 1;
`;
const BreadcrumbDivider = styled.div`
  align-self: stretch;
  height: 3.5rem;
  position: relative;
  max-width: 100%;
`;
const PageContentChild = styled.div`
  width: 74.25rem;
  height: 48.75rem;
  position: relative;
  background-color: #fff;
  display: none;
  max-width: 100%;
`;
const ClassLessonStreamlineCoreIcon = styled.img`
  width: 1.875rem;
  height: 1.5rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
`;
const ClassIconTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.125rem 0rem 0rem;
`;
const Title1 = styled.h3`
  margin: 0;
  flex: 1;
  position: relative;
  font-size: inherit;
  line-height: 1.75rem;
  font-weight: 400;
  font-family: inherit;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: 1.125rem;
    line-height: 1.375rem;
  }
`;
const ClassTitle = styled.div`
  width: 10.25rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.812rem;
`;
const Title2 = styled.div`
  width: 5.669rem;
  position: relative;
  letter-spacing: 0.15px;
  line-height: 1.5rem;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const PageTitleContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  font-size: 1rem;
`;
const HeaderTitles = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.512rem;
  max-width: 100%;
`;
const PageHeader = styled.div`
  width: 24.606rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0.437rem;
  box-sizing: border-box;
  max-width: 100%;
`;
const Circularprogress1 = styled(CircularProgress)``;
const CustomerValueContent = styled(Box)`
  align-self: stretch;
  height: 12.5rem;
  position: relative;
`;
const Subhead = styled.div`
  height: 3.125rem;
  flex: 1;
  position: relative;
  letter-spacing: 0.25px;
  line-height: 1.25rem;
  display: inline-block;
  z-index: 1;
`;
const CustomerLabel = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 1.062rem 0rem 0.937rem;
`;
const CustomerValue = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.687rem;
`;
const CustomerStat = styled.div`
  height: 23.563rem;
  width: 12.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Divider7 = styled.div`
  width: 0.063rem;
  height: 3rem;
  position: absolute;
  margin: 0 !important;
  top: 0rem;
  left: 0rem;
  background-color: #d9d9d9;
  display: none;
  z-index: 0;
`;
const Divider8 = styled.div`
  width: 0.063rem;
  height: 3rem;
  position: absolute;
  margin: 0 !important;
  top: 0rem;
  right: 0rem;
  background-color: #d9d9d9;
  display: none;
  z-index: 1;
`;
const Title3 = styled.div`
  position: relative;
  font-size: 0.875rem;
  letter-spacing: 0.1px;
  line-height: 1.5rem;
  font-weight: 500;
  font-family: Roboto;
  color: rgba(0, 0, 0, 0.87);
  text-align: center;
  display: inline-block;
  min-width: 3.938rem;
`;
const Placeholder = styled.div`
  width: 3.938rem;
  height: 1rem;
  position: relative;
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.12);
  display: none;
  z-index: 1;
`;
const Divider9 = styled.div`
  width: 0.063rem;
  height: 3.5rem;
  position: absolute;
  margin: 0 !important;
  top: 0rem;
  left: 0rem;
  background-color: #d9d9d9;
  display: none;
  z-index: 2;
`;
const Divider10 = styled.div`
  width: 0.063rem;
  height: 3.5rem;
  position: absolute;
  margin: 0 !important;
  top: 0rem;
  right: 0rem;
  background-color: #d9d9d9;
  display: none;
  z-index: 3;
`;
const TitleContainers = styled.div`
  width: 14.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0.75rem 1rem;
  box-sizing: border-box;
  position: relative;
`;
const HeaderTitle = styled.div`
  align-self: stretch;
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0rem 0rem 0rem 0rem;
`;
const ColumnHeaders = styled.div`
  align-self: stretch;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
`;
const UserAvatarIcon = styled.img`
  height: 2rem;
  width: 2rem;
  position: relative;
  object-fit: cover;
  display: none;
`;
const CellContent = styled.div`
  flex: 1;
  position: relative;
  font-size: 0.875rem;
  letter-spacing: 0.25px;
  line-height: 1.25rem;
  font-family: Roboto;
  color: rgba(0, 0, 0, 0.87);
  text-align: left;
`;
const HeaderCellContent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`;
const PlaceholderIcon = styled.img`
  height: 2rem;
  width: 2rem;
  position: relative;
  flex-shrink: 0;
`;
const Placeholder1 = styled.div`
  height: 1rem;
  width: 10rem;
  position: relative;
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.12);
  flex-shrink: 0;
`;
const FramePlaceholder = styled.div`
  align-self: stretch;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`;
const HeaderCellContainers = styled.div`
  align-self: stretch;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 1rem;
`;
const Divider11 = styled.div`
  width: 0.063rem;
  height: 3.5rem;
  position: absolute;
  margin: 0 !important;
  top: 0rem;
  left: 0rem;
  background-color: #d9d9d9;
  display: none;
  z-index: 1;
`;
const Divider12 = styled.div`
  width: 0.063rem;
  height: 3.5rem;
  position: absolute;
  margin: 0 !important;
  top: 0rem;
  right: 0rem;
  background-color: #d9d9d9;
  display: none;
  z-index: 2;
`;
const CellElements = styled.div`
  align-self: stretch;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const CellContent1 = styled.div`
  position: relative;
  font-size: 0.875rem;
  letter-spacing: 0.25px;
  line-height: 1.25rem;
  font-family: Roboto;
  color: rgba(0, 0, 0, 0.87);
  text-align: left;
`;
const FirstRowCellContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`;
const FirstRowCellContainers = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 1rem;
`;
const CellElements1 = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const SecondRowCellContainers = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: #fff;
  align-self: stretch;
  height: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 1rem;
  box-sizing: border-box;
  font-family: Roboto;
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.87);
  min-width: 6.813rem;
  @media screen and (max-width: 450px) {
    height: 3rem;
  }
`;
const UserAvatarIcon1 = styled.img`
  height: 2rem;
  width: 2rem;
  position: relative;
  object-fit: cover;
`;
const CellContent2 = styled.div`
  height: 1.25rem;
  flex: 1;
  position: relative;
  font-size: 0.875rem;
  letter-spacing: 0.25px;
  line-height: 1.25rem;
  font-family: Roboto;
  color: rgba(0, 0, 0, 0.87);
  text-align: left;
  display: inline-block;
`;
const PlaceholderIcon1 = styled.img`
  height: 2rem;
  width: 2rem;
  position: relative;
`;
const Placeholder2 = styled.div`
  height: 1rem;
  flex: 1;
  position: relative;
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.12);
`;
const Frame = styled.div`
  align-self: stretch;
  height: 3rem;
  background: linear-gradient(rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02)), #fff;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
  z-index: 0;
  @media screen and (max-width: 450px) {
    height: 3rem;
  }
`;
const CellElements2 = styled.div`
  width: 14rem;
  height: 3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const Frame1 = styled.div`
  align-self: stretch;
  height: 3rem;
  background-color: #fff;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
  z-index: 0;
  @media screen and (max-width: 450px) {
    height: 3rem;
  }
`;
const ImageText = styled.div`
  width: 11.313rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
`;
const Icon2 = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  min-height: 1.5rem;
`;
const Title4 = styled.div`
  flex: 1;
  position: relative;
  font-size: 0.875rem;
  letter-spacing: 0.1px;
  line-height: 1.5rem;
  font-weight: 500;
  font-family: Roboto;
  color: rgba(0, 0, 0, 0.87);
  text-align: center;
`;
const Placeholder3 = styled.div`
  height: 1rem;
  width: 5.25rem;
  position: relative;
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.12);
  display: none;
`;
const NumberIconCells = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`;
const ColumnHeaders1 = styled.div`
  align-self: stretch;
  background-color: #f6f6f6;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem 0.625rem;
  position: relative;
  gap: 0.625rem;
`;
const CellContent3 = styled.div`
  position: relative;
  font-size: 0.875rem;
  letter-spacing: 0.25px;
  line-height: 1.25rem;
  font-family: Roboto;
  color: #000;
  text-align: right;
  display: inline-block;
  min-width: 1.688rem;
`;
const Trending = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`;
const Placeholder4 = styled.div`
  width: 1.688rem;
  height: 1rem;
  position: relative;
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.12);
  display: none;
`;
const Frame2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 2.312rem;
`;
const CellElements3 = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 0.625rem;
`;
const NumberAndIcon = styled.div`
  width: 6.313rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
`;
const Title5 = styled.div`
  position: relative;
  font-size: 0.875rem;
  letter-spacing: 0.1px;
  line-height: 1.5rem;
  font-weight: 500;
  font-family: Roboto;
  color: rgba(0, 0, 0, 0.87);
  text-align: center;
  display: inline-block;
  min-width: 3.063rem;
`;
const Placeholder5 = styled.div`
  align-self: stretch;
  height: 1rem;
  position: relative;
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.12);
  display: none;
  z-index: 1;
`;
const ProgressTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 3.75rem;
  position: relative;
`;
const HeaderTitle1 = styled.div`
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ColumnHeaders2 = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const Subtract1ButtonDeleteButt = styled.input`
  margin: 0;
  height: 0.875rem;
  width: 0.75rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const CellContent4 = styled.div`
  position: relative;
  font-size: 0.875rem;
  letter-spacing: 0.25px;
  line-height: 1.25rem;
  font-family: Roboto;
  color: rgba(0, 0, 0, 0.87);
  text-align: center;
  display: inline-block;
  min-width: 2.438rem;
`;
const Placeholder6 = styled.div`
  height: 1rem;
  width: 5.313rem;
  position: relative;
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.12);
  display: none;
`;
const ProgressCells = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 2.187rem;
  gap: 0.937rem;
`;
const Divider13 = styled.div`
  height: 3.5rem;
  width: 0.063rem;
  position: absolute;
  margin: 0 !important;
  top: 0rem;
  left: 0rem;
  background-color: #d9d9d9;
  display: none;
  z-index: 1;
`;
const Divider14 = styled.div`
  height: 3.5rem;
  width: 0.063rem;
  position: absolute;
  margin: 0 !important;
  top: 0rem;
  right: 0rem;
  background-color: #d9d9d9;
  display: none;
  z-index: 2;
`;
const CellElements4 = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 1.25rem;
`;
const Subtract1ButtonDeleteButtIcon = styled.img`
  height: 0.875rem;
  width: 0.875rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const CellContent5 = styled.div`
  position: relative;
  font-size: 0.875rem;
  letter-spacing: 0.25px;
  line-height: 1.25rem;
  font-family: Roboto;
  color: rgba(0, 0, 0, 0.87);
  text-align: right;
  display: inline-block;
  min-width: 1.938rem;
`;
const Frame3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 2.125rem;
  gap: 1.187rem;
`;
const CellElements5 = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 0.625rem;
`;
const CellContent6 = styled.div`
  position: relative;
  font-size: 0.875rem;
  letter-spacing: 0.25px;
  line-height: 1.25rem;
  font-family: Roboto;
  color: rgba(0, 0, 0, 0.87);
  text-align: right;
  display: inline-block;
  min-width: 1.688rem;
`;
const Frame4 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.875rem 2.125rem;
  gap: 1.25rem;
`;
const CellElements6 = styled.div`
  align-self: stretch;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 0.625rem;
`;
const CellContent7 = styled.div`
  align-self: stretch;
  height: 1.25rem;
  position: relative;
  font-size: 0.875rem;
  letter-spacing: 0.25px;
  line-height: 1.25rem;
  font-family: "Roboto Mono";
  color: rgba(0, 0, 0, 0.87);
  text-align: right;
  display: inline-block;
`;
const Placeholder7 = styled.div`
  align-self: stretch;
  height: 1rem;
  position: relative;
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.12);
  display: none;
`;
const Frame5 = styled.div`
  align-self: stretch;
  height: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
  z-index: 0;
`;
const CellElements7 = styled.div`
  width: 7.5rem;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  overflow: hidden;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 0.625rem;
`;
const CellElements8 = styled.div`
  width: 7.5rem;
  background: linear-gradient(rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02)), #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  overflow: hidden;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 0.625rem;
`;
const Progress = styled.div`
  width: 10.563rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
`;
const Title6 = styled.div`
  position: relative;
  font-size: 0.875rem;
  letter-spacing: 0.1px;
  line-height: 1.5rem;
  font-weight: 500;
  font-family: Roboto;
  color: rgba(0, 0, 0, 0.87);
  text-align: right;
  display: inline-block;
  min-width: 2.5rem;
`;
const Placeholder8 = styled.div`
  width: 2.5rem;
  height: 1rem;
  position: relative;
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.12);
  display: none;
  z-index: 1;
`;
const Frame6 = styled.div`
  width: 14.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.25rem;
  box-sizing: border-box;
  position: relative;
`;
const HeaderTitle2 = styled.div`
  align-self: stretch;
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0rem 0rem;
`;
const CellContent8 = styled.div`
  flex: 1;
  position: relative;
  font-size: 0.875rem;
  letter-spacing: 0.25px;
  line-height: 1.25rem;
  font-family: Roboto;
  color: rgba(0, 0, 0, 0.87);
  text-align: center;
`;
const Frame7 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
const ImageText1 = styled.div`
  width: 9.75rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
`;
const Title7 = styled.div`
  position: relative;
  font-size: 0.875rem;
  letter-spacing: 0.1px;
  line-height: 1.5rem;
  font-weight: 500;
  font-family: Roboto;
  color: rgba(0, 0, 0, 0.87);
  text-align: center;
  display: inline-block;
  min-width: 5.063rem;
`;
const Frame8 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.875rem;
  position: relative;
`;
const Frame9 = styled.div`
  align-self: stretch;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3.875rem 1rem;
`;
const CellElements9 = styled.div`
  align-self: stretch;
  border-left: 1px solid rgba(0, 0, 0, 0.12);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const Frame10 = styled.div`
  align-self: stretch;
  height: 3rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
  z-index: 0;
  @media screen and (max-width: 450px) {
    height: 3rem;
  }
`;
const CellElements10 = styled.div`
  width: 14rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  overflow: hidden;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const ImageText2 = styled.div`
  width: 8.875rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
`;
const Title8 = styled.div`
  position: relative;
  font-size: 0.875rem;
  letter-spacing: 0.1px;
  line-height: 1.5rem;
  font-weight: 500;
  font-family: Roboto;
  color: rgba(0, 0, 0, 0.87);
  text-align: left;
  z-index: 0;
`;
const Frame11 = styled.div`
  width: 14.5rem;
  height: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
  position: relative;
`;
const HeaderTitle3 = styled.div`
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 2;
`;
const ColumnHeaders3 = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
`;
const CellContent9 = styled.div`
  width: 10rem;
  position: relative;
  font-size: 0.875rem;
  letter-spacing: 0.25px;
  line-height: 1.25rem;
  font-family: Roboto;
  color: rgba(0, 0, 0, 0.87);
  text-align: left;
  display: none;
`;
const CellElements11 = styled.div`
  width: 14rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const CellContent10 = styled.div`
  height: 1.25rem;
  flex: 1;
  position: relative;
  font-size: 0.875rem;
  letter-spacing: 0.25px;
  line-height: 1.25rem;
  font-family: Roboto;
  color: #897a91;
  text-align: left;
  display: inline-block;
`;
const Frame12 = styled.div`
  align-self: stretch;
  background-color: #f9feff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  white-space: nowrap;
`;
const Frame13 = styled.div`
  align-self: stretch;
  height: 3rem;
  background-color: #f9feff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
  z-index: 0;
  @media screen and (max-width: 450px) {
    height: 3rem;
  }
`;
const ImageText3 = styled.div`
  width: 8.5rem;
  background-color: #fff;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const TableContent = styled.div`
  width: 44.063rem;
  border-radius: 28px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem 0rem 0rem;
  box-sizing: border-box;
  flex-shrink: 0;
  debug_commit: bf4bc93;
  max-width: 100%;
  row-gap: 20px;
  @media screen and (max-width: 1025px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const LabelText1 = styled.div`
  position: relative;
  font-size: 0.875rem;
  letter-spacing: 0.1px;
  line-height: 1.25rem;
  font-weight: 500;
  font-family: Roboto;
  color: #fff;
  text-align: center;
  display: inline-block;
  min-width: 6.375rem;
`;
const StateLayer3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.625rem 1.5rem;
`;
const Button4 = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: #006874;
  border-radius: 100px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  debug_commit: bf4bc93;
`;
const ViewReportButton = styled.div`
  width: 43.375rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0rem 1.25rem;
  box-sizing: border-box;
  max-width: 100%;
`;
const Table = styled.form`
  margin: 0;
  align-self: stretch;
  height: 13.075rem;
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.3))
    drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.15));
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.962rem 0rem 0.112rem;
  box-sizing: border-box;
  gap: 1.35rem;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 1025px) {
    height: auto;
  }
`;
const Title9 = styled.div`
  width: 5.669rem;
  position: relative;
  letter-spacing: 0.15px;
  line-height: 1.5rem;
  font-weight: 500;
  display: inline-block;
  z-index: 1;
`;
const Title10 = styled.div`
  position: relative;
  letter-spacing: 0.1px;
  line-height: 1.5rem;
  font-weight: 500;
  display: inline-block;
  min-width: 3.938rem;
`;
const ColumnHeaders4 = styled.div`
  align-self: stretch;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  text-align: center;
`;
const CellContent11 = styled.div`
  flex: 1;
  position: relative;
  letter-spacing: 0.25px;
  line-height: 1.25rem;
`;
const CellContent12 = styled.div`
  height: 1.25rem;
  flex: 1;
  position: relative;
  letter-spacing: 0.25px;
  line-height: 1.25rem;
  display: inline-block;
`;
const Title11 = styled.div`
  flex: 1;
  position: relative;
  letter-spacing: 0.1px;
  line-height: 1.5rem;
  font-weight: 500;
`;
const ColumnHeaders5 = styled.div`
  align-self: stretch;
  background-color: #f6f6f6;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem 0.625rem;
  position: relative;
  gap: 0.625rem;
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
`;
const CellContent13 = styled.div`
  position: relative;
  letter-spacing: 0.25px;
  line-height: 1.25rem;
  display: inline-block;
  min-width: 1.688rem;
`;
const NumberAndIcon1 = styled.div`
  width: 6.313rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  text-align: right;
  color: #000;
`;
const Title12 = styled.div`
  position: relative;
  letter-spacing: 0.1px;
  line-height: 1.5rem;
  font-weight: 500;
  display: inline-block;
  min-width: 3.063rem;
`;
const ColumnHeaders6 = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  font-family: Roboto;
`;
const CellContent14 = styled.div`
  position: relative;
  letter-spacing: 0.25px;
  line-height: 1.25rem;
  display: inline-block;
  min-width: 2.438rem;
`;
const CellElements12 = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 1.25rem;
  text-align: center;
  font-family: Roboto;
`;
const Frame14 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 1.875rem;
  gap: 1.187rem;
`;
const CellElements13 = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 0.625rem;
  font-family: Roboto;
`;
const CellElements14 = styled.div`
  align-self: stretch;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 0.625rem;
  font-family: Roboto;
`;
const CellContent15 = styled.div`
  align-self: stretch;
  height: 1.25rem;
  position: relative;
  letter-spacing: 0.25px;
  line-height: 1.25rem;
  display: inline-block;
`;
const Progress1 = styled.div`
  width: 10.563rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  text-align: right;
  font-family: "Roboto Mono";
`;
const Title13 = styled.div`
  position: relative;
  letter-spacing: 0.1px;
  line-height: 1.5rem;
  font-weight: 500;
  display: inline-block;
  min-width: 2.5rem;
`;
const ColumnHeaders7 = styled.div`
  align-self: stretch;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  text-align: right;
`;
const CellElements15 = styled.div`
  width: 14rem;
  height: 3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  text-align: left;
`;
const ImageText4 = styled.div`
  width: 9.75rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  text-align: center;
`;
const Title14 = styled.div`
  position: relative;
  letter-spacing: 0.1px;
  line-height: 1.5rem;
  font-weight: 500;
  display: inline-block;
  min-width: 5.063rem;
`;
const ColumnHeaders8 = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
`;
const CellElements16 = styled.div`
  align-self: stretch;
  border-left: 1px solid rgba(0, 0, 0, 0.12);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  text-align: center;
`;
const Title15 = styled.div`
  position: relative;
  letter-spacing: 0.1px;
  line-height: 1.5rem;
  font-weight: 500;
  z-index: 0;
`;
const CellContent16 = styled.div`
  width: 10rem;
  position: relative;
  letter-spacing: 0.25px;
  line-height: 1.25rem;
  display: none;
`;
const CellElements17 = styled.div`
  width: 14rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  color: #897a91;
`;
const TableContent1 = styled.div`
  width: 44.063rem;
  border-radius: 28px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem 0rem 0rem;
  box-sizing: border-box;
  max-width: 100%;
  row-gap: 20px;
  @media screen and (max-width: 1025px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const SecondTable = styled.div`
  align-self: stretch;
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.3))
    drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.15));
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.962rem 0rem 0.112rem;
  box-sizing: border-box;
  max-width: 100%;
  z-index: 1;
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.87);
`;
const SecondTableContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.3rem;
  max-width: 100%;
  flex-shrink: 0;
`;
const TableContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4.937rem;
  min-width: 33.688rem;
  max-width: 100%;
  text-align: left;
  font-size: 1rem;
  color: #171d1e;
  @media screen and (max-width: 1025px) {
    gap: 2.438rem;
  }
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
  @media screen and (max-width: 450px) {
    gap: 1.25rem;
  }
`;
const CustomerStats = styled.div`
  width: 70.375rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0rem 0rem 0.95rem;
  box-sizing: border-box;
  gap: 6rem;
  max-width: 100%;
  text-align: center;
  font-size: 0.875rem;
  color: #3f484a;
  @media screen and (max-width: 1125px) {
    gap: 3rem;
  }
  @media screen and (max-width: 750px) {
    gap: 1.5rem;
  }
`;
const Button5 = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: #006874;
  border-radius: 100px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
`;
const ButtonWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0rem 0rem 0rem 8.75rem;
  @media screen and (max-width: 450px) {
    padding-left: 1.25rem;
    box-sizing: border-box;
  }
`;
const PageContent = styled.div`
  width: 74.25rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1.612rem 1.312rem 6.437rem;
  box-sizing: border-box;
  gap: 0.3rem;
  max-width: 100%;
  text-align: left;
  font-size: 1.375rem;
  color: #171d1e;
  @media screen and (max-width: 1025px) {
    padding-top: 1.25rem;
    padding-bottom: 4.188rem;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-bottom: 2.75rem;
    box-sizing: border-box;
  }
`;
const BreadcrumbsDarkmode = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.312rem;
  max-width: 100%;
`;
const Content = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.5rem 0rem 0rem;
  box-sizing: border-box;
  max-width: calc(100% - 166px);
  text-align: center;
  font-size: 0.875rem;
  color: #006874;
  font-family: Roboto;
  @media screen and (max-width: 1025px) {
    max-width: 100%;
  }
`;
const Navigation1 = styled.main`
  width: 87.313rem;
  height: 60.438rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 1.25rem 6.375rem 0rem;
  box-sizing: border-box;
  gap: 2.75rem;
  max-width: 100%;
  text-align: left;
  font-size: 0.875rem;
  color: #3f484a;
  font-family: Roboto;
  @media screen and (max-width: 1025px) {
    height: auto;
    padding-left: 1.25rem;
    padding-bottom: 4.125rem;
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    gap: 1.375rem;
  }
  @media screen and (max-width: 450px) {
    padding-bottom: 2.688rem;
    box-sizing: border-box;
  }
`;
const DesktopChiTitKpiRoot = styled.div`
  position: relative;
  background-color: #dbe4e6;
  width: 100%;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.062rem 0rem 0rem;
  box-sizing: border-box;
  line-height: normal;
  letter-spacing: normal;
`;

const KPIDetail = () => {
  const onTrackAchieveExcel1Click = useCallback(() => {
    // Please sync "Desktop - KPI " to the project
  }, []);

  const onButtonContainerClick = useCallback(() => {
    // Please sync "Desktop - Setting - v1" to the project
  }, []);

  const onSectionHeader3Click = useCallback(() => {
    // Please sync "Desktop - Công việc- v1" to the project
  }, []);

  const onVBreadcrumbsItemTextClick = useCallback(() => {
    // Please sync "Desktop - KPI " to the project
  }, []);

  return (
    <DesktopChiTitKpiRoot>
      <IconButton>
        <Container>
          <StateLayer>
            <Icon alt="" />
          </StateLayer>
        </Container>
      </IconButton>
      <DesktopChiTitKpiChild />
      <AppbarContent>
        <KPIButtons>
          <Button>
            <VIcon>menu</VIcon>
            <Span>DI</Span>
          </Button>
          <AchieveExcelButton>
            <TrackAchieveExcel
              loading="lazy"
              alt=""
              src="/track-achieve-excel-1@2x.png"
              onClick={onTrackAchieveExcel1Click}
            />
          </AchieveExcelButton>
        </KPIButtons>
        <Divider1>
          <Divider />
        </Divider1>
        <SearchDarkmode>
          <SearchBar>
            <RectangleParent>
              <FrameChild />
              <SearchIcon alt="" src="/search-icon.svg" />
              <TmKimG>Tìm kiếm gì đó nào</TmKimG>
            </RectangleParent>
          </SearchBar>
          <SettingsButtons>
            <NotificationButton>
              <Button1>
                <IconssettingsFilled24px alt="" />
                <NotificationsIcon
                  loading="lazy"
                  alt=""
                  src="/notifications.svg"
                />
              </Button1>
            </NotificationButton>
            <Button2>
              <NotificationsIcon loading="lazy" alt="" src="/dark-mode.svg" />
              <Span1>DI</Span1>
            </Button2>
            <UserImagesButton>
              <Button3 onClick={onButtonContainerClick}>
                <UserImagesuserImages
                  loading="lazy"
                  alt=""
                  src="/user-imagesuser-images.svg"
                />
                <Span1>DI</Span1>
              </Button3>
            </UserImagesButton>
          </SettingsButtons>
        </SearchDarkmode>
      </AppbarContent>
      <Navigation1>
        <NavigationDrawer>
          <Headline>
            <Title>Title</Title>
          </Headline>
          <SectionHeader>
            <StateLayer1>
              <NotificationsIcon alt="" />
              <TrangCh>Trang chủ</TrangCh>
              <BadgeLabelText>100+</BadgeLabelText>
            </StateLayer1>
          </SectionHeader>
          <NavItem>
            <StateLayer2>
              <Icon1 alt="" />
              <LabelText>Tạo mới</LabelText>
            </StateLayer2>
          </NavItem>
          <NavItem1>
            <StateLayer1>
              <Icon alt="" />
              <Label>Công việc đã đăng ký</Label>
              <BadgeLabelText1>100+</BadgeLabelText1>
            </StateLayer1>
          </NavItem1>
          <NavItem1>
            <StateLayer1>
              <Icon alt="" />
              <Label>Lịch sử KPI</Label>
              <BadgeLabelText1>100+</BadgeLabelText1>
            </StateLayer1>
          </NavItem1>
          <NavItem1>
            <StateLayer1>
              <Icon alt="" />
              <Label>Bảng tin</Label>
              <BadgeLabelText1>100+</BadgeLabelText1>
            </StateLayer1>
          </NavItem1>
          <Divider3>
            <Divider2 />
          </Divider3>
          <SectionHeader1>
            <GraphBarIncreaseUpProduct>
              <GraphBarIncreaseUpProductIcon
                loading="lazy"
                alt=""
                src="/graphbarincreaseupproductperformanceincreasearrowgraphbusinesschart.svg"
              />
            </GraphBarIncreaseUpProduct>
            <Kpi>KPI</Kpi>
          </SectionHeader1>
          <NavItem1>
            <StateLayer1>
              <Icon alt="" />
              <Label>Label</Label>
              <BadgeLabelText1>100+</BadgeLabelText1>
            </StateLayer1>
          </NavItem1>
          <NavItem1>
            <StateLayer1>
              <Icon alt="" />
              <Label>Label</Label>
              <BadgeLabelText1>100+</BadgeLabelText1>
            </StateLayer1>
          </NavItem1>
          <NavItem1>
            <StateLayer1>
              <Icon alt="" />
              <Label>Label</Label>
              <BadgeLabelText1>100+</BadgeLabelText1>
            </StateLayer1>
          </NavItem1>
          <Divider3>
            <Divider2 />
          </Divider3>
          <SectionHeader2 onClick={onSectionHeader3Click}>
            <VectorIcon alt="" src="/vector-1.svg" />
            <Label1>Công việc</Label1>
          </SectionHeader2>
          <SectionHeader3>
            <NewsmodeIcon loading="lazy" alt="" src="/newsmode.svg" />
            <Label2>Bảng tin</Label2>
          </SectionHeader3>
          <NavItem1>
            <StateLayer1>
              <Icon alt="" />
              <Label>Label</Label>
              <BadgeLabelText1>100+</BadgeLabelText1>
            </StateLayer1>
          </NavItem1>
          <NavItem1>
            <StateLayer1>
              <Icon alt="" />
              <Label>Label</Label>
              <BadgeLabelText1>100+</BadgeLabelText1>
            </StateLayer1>
          </NavItem1>
        </NavigationDrawer>
        <Content>
          <BreadcrumbsDarkmode>
            <BreadcrumbDivider>
              <Breadcrumbs>
                <VBreadcrumbsItem onClick={onVBreadcrumbsItemTextClick}>
                  KPI
                </VBreadcrumbsItem>
                <Divider4>
                  <BreadcrumbSeparator>\</BreadcrumbSeparator>
                </Divider4>
                <VBreadcrumbsItem1>Chi tiết KPI</VBreadcrumbsItem1>
                <Divider5>
                  <Div>\</Div>
                </Divider5>
                <VBreadcrumbsItem2>Link 2</VBreadcrumbsItem2>
              </Breadcrumbs>
              <HorizontalDarkinsetDark>
                <Divider6 />
              </HorizontalDarkinsetDark>
            </BreadcrumbDivider>
            <PageContent>
              <PageContentChild />
              <PageHeader>
                <HeaderTitles>
                  <ClassTitle>
                    <ClassIconTitle>
                      <ClassLessonStreamlineCoreIcon
                        loading="lazy"
                        alt=""
                        src="/classlessonstreamlinecoresvg.svg"
                      />
                    </ClassIconTitle>
                    <Title1>Giảng dạy</Title1>
                  </ClassTitle>
                  <PageTitleContainer>
                    <Title2>OOP</Title2>
                  </PageTitleContainer>
                </HeaderTitles>
              </PageHeader>
              <CustomerStats>
                <CustomerStat>
                  <CustomerValue>
                    <CustomerValueContent sx={{ width: "100%" }}>
                      <Circularprogress1 />
                    </CustomerValueContent>
                    <CustomerLabel>
                      <Subhead>Ứớc tính hoàn thành: 7 ngày</Subhead>
                    </CustomerLabel>
                  </CustomerValue>
                </CustomerStat>
                <TableContainer>
                  <Table>
                    <TableContent>
                      <ImageText>
                        <ColumnHeaders>
                          <Divider7 />
                          <Divider8 />
                          <HeaderTitle>
                            <TitleContainers>
                              <Title3>{`Công việc `}</Title3>
                              <Placeholder />
                              <Divider9 />
                              <Divider10 />
                            </TitleContainers>
                          </HeaderTitle>
                        </ColumnHeaders>
                        <CellElements>
                          <HeaderCellContainers>
                            <HeaderCellContent>
                              <UserAvatarIcon alt="" />
                              <CellContent>Dạy học trên lớp</CellContent>
                            </HeaderCellContent>
                            <FramePlaceholder>
                              <PlaceholderIcon alt="" />
                              <Placeholder1 />
                            </FramePlaceholder>
                          </HeaderCellContainers>
                          <Divider11 />
                          <Divider12 />
                        </CellElements>
                        <CellElements1>
                          <FirstRowCellContainers>
                            <FirstRowCellContent>
                              <UserAvatarIcon alt="" />
                              <CellContent1>{`Hướng dẫn thực hành `}</CellContent1>
                            </FirstRowCellContent>
                            <FramePlaceholder>
                              <PlaceholderIcon alt="" />
                              <Placeholder1 />
                            </FramePlaceholder>
                          </FirstRowCellContainers>
                          <Divider11 />
                          <Divider12 />
                        </CellElements1>
                        <CellElements>
                          <SecondRowCellContainers
                            placeholder="Chấm điểm"
                            type="text"
                          />
                          <Divider11 />
                          <Divider12 />
                        </CellElements>
                        <CellElements2>
                          <Frame>
                            <HeaderCellContent>
                              <UserAvatarIcon1 alt="" />
                              <CellContent2>
                                Lorem Ipsum Dolor Si...
                              </CellContent2>
                            </HeaderCellContent>
                            <FramePlaceholder>
                              <PlaceholderIcon1 alt="" />
                              <Placeholder2 />
                            </FramePlaceholder>
                          </Frame>
                          <Divider11 />
                          <Divider12 />
                        </CellElements2>
                        <CellElements2>
                          <Frame1>
                            <HeaderCellContent>
                              <UserAvatarIcon1 alt="" />
                              <CellContent2>
                                Lorem Ipsum Dolor Si...
                              </CellContent2>
                            </HeaderCellContent>
                            <FramePlaceholder>
                              <PlaceholderIcon1 alt="" />
                              <Placeholder2 />
                            </FramePlaceholder>
                          </Frame1>
                          <Divider11 />
                          <Divider12 />
                        </CellElements2>
                      </ImageText>
                      <NumberAndIcon>
                        <ColumnHeaders1>
                          <NumberIconCells>
                            <Icon2 alt="" />
                            <Title4>Trọng số</Title4>
                            <Placeholder3 />
                          </NumberIconCells>
                          <Divider11 />
                          <Divider12 />
                        </ColumnHeaders1>
                        <CellElements3>
                          <Frame2>
                            <Trending>
                              <CellContent3>50%</CellContent3>
                              <IconssettingsFilled24px alt="" />
                            </Trending>
                            <Placeholder4 />
                          </Frame2>
                          <Divider11 />
                          <Divider12 />
                        </CellElements3>
                        <CellElements3>
                          <Frame2>
                            <Trending>
                              <CellContent3>25%</CellContent3>
                              <IconssettingsFilled24px alt="" />
                            </Trending>
                            <Placeholder4 />
                          </Frame2>
                          <Divider11 />
                          <Divider12 />
                        </CellElements3>
                        <CellElements3>
                          <Frame2>
                            <Trending>
                              <CellContent3>25%</CellContent3>
                              <IconssettingsFilled24px alt="" />
                            </Trending>
                            <Placeholder4 />
                          </Frame2>
                          <Divider11 />
                          <Divider12 />
                        </CellElements3>
                      </NumberAndIcon>
                      <Progress>
                        <ColumnHeaders2>
                          <Divider7 />
                          <Divider8 />
                          <HeaderTitle1>
                            <ProgressTitleContainer>
                              <Title5>Tiến độ</Title5>
                              <Placeholder5 />
                              <Divider9 />
                              <Divider10 />
                            </ProgressTitleContainer>
                          </HeaderTitle1>
                        </ColumnHeaders2>
                        <CellElements4>
                          <ProgressCells>
                            <Subtract1ButtonDeleteButt type="checkbox" />
                            <CellContent4>16/48</CellContent4>
                            <Icon1 alt="" src="/icon-10.svg" />
                            <Placeholder6 />
                          </ProgressCells>
                          <Divider13 />
                          <Divider14 />
                        </CellElements4>
                        <CellElements5>
                          <Frame3>
                            <Subtract1ButtonDeleteButtIcon
                              alt=""
                              src="/subtract1buttondeletebuttonssubtracthorizontalremovelineaddmathematicsmathminus-1.svg"
                            />
                            <CellContent5>9/20</CellContent5>
                            <Icon1 alt="" src="/icon-10.svg" />
                            <Placeholder6 />
                          </Frame3>
                          <Divider13 />
                          <Divider14 />
                        </CellElements5>
                        <CellElements6>
                          <Frame4>
                            <Subtract1ButtonDeleteButtIcon
                              alt=""
                              src="/subtract1buttondeletebuttonssubtracthorizontalremovelineaddmathematicsmathminus-1.svg"
                            />
                            <CellContent6>60%</CellContent6>
                            <Icon1 alt="" src="/icon-10.svg" />
                            <Placeholder6 />
                          </Frame4>
                          <Divider11 />
                          <Divider12 />
                        </CellElements6>
                        <CellElements7>
                          <Frame5>
                            <CellContent7>31/12/2022</CellContent7>
                            <Placeholder7 />
                          </Frame5>
                          <Divider11 />
                          <Divider12 />
                        </CellElements7>
                        <CellElements8>
                          <Frame5>
                            <CellContent7>31/12/2022</CellContent7>
                            <Placeholder7 />
                          </Frame5>
                          <Divider11 />
                          <Divider12 />
                        </CellElements8>
                        <CellElements7>
                          <Frame5>
                            <CellContent7>31/12/2022</CellContent7>
                            <Placeholder7 />
                          </Frame5>
                          <Divider11 />
                          <Divider12 />
                        </CellElements7>
                        <CellElements7>
                          <Frame5>
                            <CellContent7>31/12/2022</CellContent7>
                            <Placeholder7 />
                          </Frame5>
                          <Divider11 />
                          <Divider12 />
                        </CellElements7>
                        <CellElements7>
                          <Frame5>
                            <CellContent7>31/12/2022</CellContent7>
                            <Placeholder7 />
                          </Frame5>
                          <Divider11 />
                          <Divider12 />
                        </CellElements7>
                        <CellElements7>
                          <Frame5>
                            <CellContent7>31/12/2022</CellContent7>
                            <Placeholder7 />
                          </Frame5>
                          <Divider11 />
                          <Divider12 />
                        </CellElements7>
                      </Progress>
                      <ImageText1>
                        <ColumnHeaders>
                          <Divider7 />
                          <Divider8 />
                          <HeaderTitle2>
                            <Frame6>
                              <Title6>Đơn vị</Title6>
                              <Placeholder8 />
                              <Divider9 />
                              <Divider10 />
                            </Frame6>
                          </HeaderTitle2>
                        </ColumnHeaders>
                        <CellElements>
                          <HeaderCellContainers>
                            <HeaderCellContent>
                              <UserAvatarIcon alt="" />
                              <CellContent8>Tiết</CellContent8>
                            </HeaderCellContent>
                            <FramePlaceholder>
                              <PlaceholderIcon alt="" />
                              <Placeholder1 />
                            </FramePlaceholder>
                          </HeaderCellContainers>
                          <Divider11 />
                          <Divider12 />
                        </CellElements>
                        <CellElements>
                          <HeaderCellContainers>
                            <HeaderCellContent>
                              <UserAvatarIcon alt="" />
                              <CellContent8>Giờ</CellContent8>
                            </HeaderCellContent>
                            <FramePlaceholder>
                              <PlaceholderIcon alt="" />
                              <Placeholder1 />
                            </FramePlaceholder>
                          </HeaderCellContainers>
                          <Divider11 />
                          <Divider12 />
                        </CellElements>
                        <CellElements>
                          <HeaderCellContainers>
                            <Frame7>
                              <UserAvatarIcon alt="" />
                              <CellContent8>Hoàn thiện</CellContent8>
                            </Frame7>
                            <FramePlaceholder>
                              <PlaceholderIcon alt="" />
                              <Placeholder1 />
                            </FramePlaceholder>
                          </HeaderCellContainers>
                          <Divider11 />
                          <Divider12 />
                        </CellElements>
                        <CellElements2>
                          <Frame>
                            <HeaderCellContent>
                              <UserAvatarIcon1 alt="" />
                              <CellContent2>
                                Lorem Ipsum Dolor Si...
                              </CellContent2>
                            </HeaderCellContent>
                            <FramePlaceholder>
                              <PlaceholderIcon1 alt="" />
                              <Placeholder2 />
                            </FramePlaceholder>
                          </Frame>
                          <Divider11 />
                          <Divider12 />
                        </CellElements2>
                        <CellElements2>
                          <Frame1>
                            <HeaderCellContent>
                              <UserAvatarIcon1 alt="" />
                              <CellContent2>
                                Lorem Ipsum Dolor Si...
                              </CellContent2>
                            </HeaderCellContent>
                            <FramePlaceholder>
                              <PlaceholderIcon1 alt="" />
                              <Placeholder2 />
                            </FramePlaceholder>
                          </Frame1>
                          <Divider11 />
                          <Divider12 />
                        </CellElements2>
                      </ImageText1>
                      <ImageText2>
                        <ColumnHeaders2>
                          <Divider7 />
                          <Divider8 />
                          <HeaderTitle1>
                            <Frame8>
                              <Title7>Tổng tiến độ</Title7>
                              <Placeholder5 />
                              <Divider9 />
                              <Divider10 />
                            </Frame8>
                          </HeaderTitle1>
                        </ColumnHeaders2>
                        <CellElements9>
                          <Frame9>
                            <HeaderCellContent>
                              <UserAvatarIcon alt="" />
                              <CellContent8>43 %</CellContent8>
                            </HeaderCellContent>
                            <FramePlaceholder>
                              <PlaceholderIcon alt="" />
                              <Placeholder1 />
                            </FramePlaceholder>
                          </Frame9>
                          <Divider11 />
                          <Divider12 />
                        </CellElements9>
                        <CellElements10>
                          <Frame10>
                            <HeaderCellContent>
                              <UserAvatarIcon alt="" />
                              <CellContent2>{`Hướng dẫn thực hành `}</CellContent2>
                            </HeaderCellContent>
                            <FramePlaceholder>
                              <PlaceholderIcon1 alt="" />
                              <Placeholder2 />
                            </FramePlaceholder>
                          </Frame10>
                          <Divider11 />
                          <Divider12 />
                        </CellElements10>
                        <CellElements10>
                          <Frame10>
                            <HeaderCellContent>
                              <UserAvatarIcon alt="" />
                              <CellContent2>Chấm điểm</CellContent2>
                            </HeaderCellContent>
                            <FramePlaceholder>
                              <PlaceholderIcon1 alt="" />
                              <Placeholder2 />
                            </FramePlaceholder>
                          </Frame10>
                          <Divider11 />
                          <Divider12 />
                        </CellElements10>
                        <CellElements2>
                          <Frame>
                            <HeaderCellContent>
                              <UserAvatarIcon1 alt="" />
                              <CellContent2>
                                Lorem Ipsum Dolor Si...
                              </CellContent2>
                            </HeaderCellContent>
                            <FramePlaceholder>
                              <PlaceholderIcon1 alt="" />
                              <Placeholder2 />
                            </FramePlaceholder>
                          </Frame>
                          <Divider11 />
                          <Divider12 />
                        </CellElements2>
                        <CellElements2>
                          <Frame1>
                            <HeaderCellContent>
                              <UserAvatarIcon1 alt="" />
                              <CellContent2>
                                Lorem Ipsum Dolor Si...
                              </CellContent2>
                            </HeaderCellContent>
                            <FramePlaceholder>
                              <PlaceholderIcon1 alt="" />
                              <Placeholder2 />
                            </FramePlaceholder>
                          </Frame1>
                          <Divider11 />
                          <Divider12 />
                        </CellElements2>
                      </ImageText2>
                      <ImageText3>
                        <ColumnHeaders3>
                          <Divider7 />
                          <Divider8 />
                          <HeaderTitle3>
                            <Frame11>
                              <Title8>Ghi chú</Title8>
                              <Placeholder5 />
                              <Divider9 />
                              <Divider10 />
                            </Frame11>
                          </HeaderTitle3>
                        </ColumnHeaders3>
                        <CellElements11>
                          <Frame10>
                            <HeaderCellContent>
                              <UserAvatarIcon alt="" />
                              <CellContent9>Dạy học trên lớp</CellContent9>
                            </HeaderCellContent>
                            <FramePlaceholder>
                              <PlaceholderIcon1 alt="" />
                              <Placeholder2 />
                            </FramePlaceholder>
                          </Frame10>
                          <Divider11 />
                          <Divider12 />
                        </CellElements11>
                        <CellElements11>
                          <Frame10>
                            <HeaderCellContent>
                              <UserAvatarIcon alt="" />
                              <CellContent9>{`Hướng dẫn thực hành `}</CellContent9>
                            </HeaderCellContent>
                            <FramePlaceholder>
                              <PlaceholderIcon1 alt="" />
                              <Placeholder2 />
                            </FramePlaceholder>
                          </Frame10>
                          <Divider11 />
                          <Divider12 />
                        </CellElements11>
                        <CellElements11>
                          <Frame10>
                            <HeaderCellContent>
                              <UserAvatarIcon alt="" />
                              <CellContent9>Chấm điểm</CellContent9>
                            </HeaderCellContent>
                            <FramePlaceholder>
                              <PlaceholderIcon1 alt="" />
                              <Placeholder2 />
                            </FramePlaceholder>
                          </Frame10>
                          <Divider11 />
                          <Divider12 />
                        </CellElements11>
                        <CellElements2>
                          <Frame>
                            <HeaderCellContent>
                              <UserAvatarIcon1 alt="" />
                              <CellContent2>
                                Lorem Ipsum Dolor Si...
                              </CellContent2>
                            </HeaderCellContent>
                            <FramePlaceholder>
                              <PlaceholderIcon1 alt="" />
                              <Placeholder2 />
                            </FramePlaceholder>
                          </Frame>
                          <Divider11 />
                          <Divider12 />
                        </CellElements2>
                        <CellElements2>
                          <Frame1>
                            <HeaderCellContent>
                              <UserAvatarIcon1 alt="" />
                              <CellContent2>
                                Lorem Ipsum Dolor Si...
                              </CellContent2>
                            </HeaderCellContent>
                            <FramePlaceholder>
                              <PlaceholderIcon1 alt="" />
                              <Placeholder2 />
                            </FramePlaceholder>
                          </Frame1>
                          <Divider11 />
                          <Divider12 />
                        </CellElements2>
                        <CellElements11>
                          <Frame13>
                            <Frame12>
                              <UserAvatarIcon alt="" />
                              <CellContent10>Chú thích thêm...</CellContent10>
                            </Frame12>
                            <FramePlaceholder>
                              <PlaceholderIcon1 alt="" />
                              <Placeholder2 />
                            </FramePlaceholder>
                          </Frame13>
                          <Divider11 />
                          <Divider12 />
                        </CellElements11>
                      </ImageText3>
                    </TableContent>
                    <ViewReportButton>
                      <Button4>
                        <StateLayer3>
                          <LabelText1>+ Công việc mới</LabelText1>
                        </StateLayer3>
                      </Button4>
                    </ViewReportButton>
                  </Table>
                  <SecondTableContainer>
                    <Title9>ITSS</Title9>
                    <SecondTable>
                      <TableContent1>
                        <ImageText>
                          <ColumnHeaders4>
                            <Divider7 />
                            <Divider8 />
                            <HeaderTitle>
                              <TitleContainers>
                                <Title10>{`Công việc `}</Title10>
                                <Placeholder />
                                <Divider9 />
                                <Divider10 />
                              </TitleContainers>
                            </HeaderTitle>
                          </ColumnHeaders4>
                          <CellElements>
                            <HeaderCellContainers>
                              <HeaderCellContent>
                                <UserAvatarIcon alt="" />
                                <CellContent11>Dạy học trên lớp</CellContent11>
                              </HeaderCellContent>
                              <FramePlaceholder>
                                <PlaceholderIcon alt="" />
                                <Placeholder1 />
                              </FramePlaceholder>
                            </HeaderCellContainers>
                            <Divider11 />
                            <Divider12 />
                          </CellElements>
                          <CellElements1>
                            <FirstRowCellContainers>
                              <FirstRowCellContent>
                                <UserAvatarIcon alt="" />
                                <Div>{`Hướng dẫn thực hành `}</Div>
                              </FirstRowCellContent>
                              <FramePlaceholder>
                                <PlaceholderIcon alt="" />
                                <Placeholder1 />
                              </FramePlaceholder>
                            </FirstRowCellContainers>
                            <Divider11 />
                            <Divider12 />
                          </CellElements1>
                          <CellElements>
                            <SecondRowCellContainers
                              placeholder="Chấm điểm"
                              type="text"
                            />
                            <Divider11 />
                            <Divider12 />
                          </CellElements>
                          <CellElements2>
                            <Frame>
                              <HeaderCellContent>
                                <UserAvatarIcon1 alt="" />
                                <CellContent12>
                                  Lorem Ipsum Dolor Si...
                                </CellContent12>
                              </HeaderCellContent>
                              <FramePlaceholder>
                                <PlaceholderIcon1 alt="" />
                                <Placeholder2 />
                              </FramePlaceholder>
                            </Frame>
                            <Divider11 />
                            <Divider12 />
                          </CellElements2>
                          <CellElements2>
                            <Frame1>
                              <HeaderCellContent>
                                <UserAvatarIcon1 alt="" />
                                <CellContent12>
                                  Lorem Ipsum Dolor Si...
                                </CellContent12>
                              </HeaderCellContent>
                              <FramePlaceholder>
                                <PlaceholderIcon1 alt="" />
                                <Placeholder2 />
                              </FramePlaceholder>
                            </Frame1>
                            <Divider11 />
                            <Divider12 />
                          </CellElements2>
                        </ImageText>
                        <NumberAndIcon1>
                          <ColumnHeaders5>
                            <NumberIconCells>
                              <Icon2 alt="" />
                              <Title11>Trọng số</Title11>
                              <Placeholder3 />
                            </NumberIconCells>
                            <Divider11 />
                            <Divider12 />
                          </ColumnHeaders5>
                          <CellElements3>
                            <Frame2>
                              <Trending>
                                <CellContent13>50%</CellContent13>
                                <IconssettingsFilled24px alt="" />
                              </Trending>
                              <Placeholder4 />
                            </Frame2>
                            <Divider11 />
                            <Divider12 />
                          </CellElements3>
                          <CellElements3>
                            <Frame2>
                              <Trending>
                                <CellContent13>25%</CellContent13>
                                <IconssettingsFilled24px alt="" />
                              </Trending>
                              <Placeholder4 />
                            </Frame2>
                            <Divider11 />
                            <Divider12 />
                          </CellElements3>
                          <CellElements3>
                            <Frame2>
                              <Trending>
                                <CellContent13>25%</CellContent13>
                                <IconssettingsFilled24px alt="" />
                              </Trending>
                              <Placeholder4 />
                            </Frame2>
                            <Divider11 />
                            <Divider12 />
                          </CellElements3>
                        </NumberAndIcon1>
                        <Progress1>
                          <ColumnHeaders6>
                            <Divider7 />
                            <Divider8 />
                            <HeaderTitle1>
                              <ProgressTitleContainer>
                                <Title12>Tiến độ</Title12>
                                <Placeholder5 />
                                <Divider9 />
                                <Divider10 />
                              </ProgressTitleContainer>
                            </HeaderTitle1>
                          </ColumnHeaders6>
                          <CellElements12>
                            <ProgressCells>
                              <Subtract1ButtonDeleteButt type="checkbox" />
                              <CellContent14>32/48</CellContent14>
                              <Icon1 alt="" src="/icon-13.svg" />
                              <Placeholder6 />
                            </ProgressCells>
                            <Divider13 />
                            <Divider14 />
                          </CellElements12>
                          <CellElements13>
                            <Frame14>
                              <Subtract1ButtonDeleteButtIcon
                                alt=""
                                src="/subtract1buttondeletebuttonssubtracthorizontalremovelineaddmathematicsmathminus-4.svg"
                              />
                              <CellContent14>15/20</CellContent14>
                              <Icon1 alt="" src="/icon-13.svg" />
                              <Placeholder6 />
                            </Frame14>
                            <Divider13 />
                            <Divider14 />
                          </CellElements13>
                          <CellElements14>
                            <Frame4>
                              <Subtract1ButtonDeleteButtIcon
                                alt=""
                                src="/subtract1buttondeletebuttonssubtracthorizontalremovelineaddmathematicsmathminus-4.svg"
                              />
                              <CellContent13>25%</CellContent13>
                              <Icon1 alt="" src="/icon-13.svg" />
                              <Placeholder6 />
                            </Frame4>
                            <Divider11 />
                            <Divider12 />
                          </CellElements14>
                          <CellElements7>
                            <Frame5>
                              <CellContent15>31/12/2022</CellContent15>
                              <Placeholder7 />
                            </Frame5>
                            <Divider11 />
                            <Divider12 />
                          </CellElements7>
                          <CellElements8>
                            <Frame5>
                              <CellContent15>31/12/2022</CellContent15>
                              <Placeholder7 />
                            </Frame5>
                            <Divider11 />
                            <Divider12 />
                          </CellElements8>
                          <CellElements7>
                            <Frame5>
                              <CellContent15>31/12/2022</CellContent15>
                              <Placeholder7 />
                            </Frame5>
                            <Divider11 />
                            <Divider12 />
                          </CellElements7>
                          <CellElements7>
                            <Frame5>
                              <CellContent15>31/12/2022</CellContent15>
                              <Placeholder7 />
                            </Frame5>
                            <Divider11 />
                            <Divider12 />
                          </CellElements7>
                          <CellElements7>
                            <Frame5>
                              <CellContent15>31/12/2022</CellContent15>
                              <Placeholder7 />
                            </Frame5>
                            <Divider11 />
                            <Divider12 />
                          </CellElements7>
                          <CellElements7>
                            <Frame5>
                              <CellContent15>31/12/2022</CellContent15>
                              <Placeholder7 />
                            </Frame5>
                            <Divider11 />
                            <Divider12 />
                          </CellElements7>
                        </Progress1>
                        <ImageText4>
                          <ColumnHeaders7>
                            <Divider7 />
                            <Divider8 />
                            <HeaderTitle2>
                              <Frame6>
                                <Title13>Đơn vị</Title13>
                                <Placeholder8 />
                                <Divider9 />
                                <Divider10 />
                              </Frame6>
                            </HeaderTitle2>
                          </ColumnHeaders7>
                          <CellElements>
                            <HeaderCellContainers>
                              <HeaderCellContent>
                                <UserAvatarIcon alt="" />
                                <CellContent11>Tiết</CellContent11>
                              </HeaderCellContent>
                              <FramePlaceholder>
                                <PlaceholderIcon alt="" />
                                <Placeholder1 />
                              </FramePlaceholder>
                            </HeaderCellContainers>
                            <Divider11 />
                            <Divider12 />
                          </CellElements>
                          <CellElements>
                            <HeaderCellContainers>
                              <HeaderCellContent>
                                <UserAvatarIcon alt="" />
                                <CellContent11>Giờ</CellContent11>
                              </HeaderCellContent>
                              <FramePlaceholder>
                                <PlaceholderIcon alt="" />
                                <Placeholder1 />
                              </FramePlaceholder>
                            </HeaderCellContainers>
                            <Divider11 />
                            <Divider12 />
                          </CellElements>
                          <CellElements>
                            <HeaderCellContainers>
                              <Frame7>
                                <UserAvatarIcon alt="" />
                                <CellContent11>Hoàn thiện</CellContent11>
                              </Frame7>
                              <FramePlaceholder>
                                <PlaceholderIcon alt="" />
                                <Placeholder1 />
                              </FramePlaceholder>
                            </HeaderCellContainers>
                            <Divider11 />
                            <Divider12 />
                          </CellElements>
                          <CellElements15>
                            <Frame>
                              <HeaderCellContent>
                                <UserAvatarIcon1 alt="" />
                                <CellContent12>
                                  Lorem Ipsum Dolor Si...
                                </CellContent12>
                              </HeaderCellContent>
                              <FramePlaceholder>
                                <PlaceholderIcon1 alt="" />
                                <Placeholder2 />
                              </FramePlaceholder>
                            </Frame>
                            <Divider11 />
                            <Divider12 />
                          </CellElements15>
                          <CellElements15>
                            <Frame1>
                              <HeaderCellContent>
                                <UserAvatarIcon1 alt="" />
                                <CellContent12>
                                  Lorem Ipsum Dolor Si...
                                </CellContent12>
                              </HeaderCellContent>
                              <FramePlaceholder>
                                <PlaceholderIcon1 alt="" />
                                <Placeholder2 />
                              </FramePlaceholder>
                            </Frame1>
                            <Divider11 />
                            <Divider12 />
                          </CellElements15>
                        </ImageText4>
                        <ImageText2>
                          <ColumnHeaders8>
                            <Divider7 />
                            <Divider8 />
                            <HeaderTitle1>
                              <Frame8>
                                <Title14>Tổng tiến độ</Title14>
                                <Placeholder5 />
                                <Divider9 />
                                <Divider10 />
                              </Frame8>
                            </HeaderTitle1>
                          </ColumnHeaders8>
                          <CellElements16>
                            <Frame9>
                              <HeaderCellContent>
                                <UserAvatarIcon alt="" />
                                <CellContent11>58.3 %</CellContent11>
                              </HeaderCellContent>
                              <FramePlaceholder>
                                <PlaceholderIcon alt="" />
                                <Placeholder1 />
                              </FramePlaceholder>
                            </Frame9>
                            <Divider11 />
                            <Divider12 />
                          </CellElements16>
                          <CellElements10>
                            <Frame10>
                              <HeaderCellContent>
                                <UserAvatarIcon alt="" />
                                <CellContent12>{`Hướng dẫn thực hành `}</CellContent12>
                              </HeaderCellContent>
                              <FramePlaceholder>
                                <PlaceholderIcon1 alt="" />
                                <Placeholder2 />
                              </FramePlaceholder>
                            </Frame10>
                            <Divider11 />
                            <Divider12 />
                          </CellElements10>
                          <CellElements10>
                            <Frame10>
                              <HeaderCellContent>
                                <UserAvatarIcon alt="" />
                                <CellContent12>Chấm điểm</CellContent12>
                              </HeaderCellContent>
                              <FramePlaceholder>
                                <PlaceholderIcon1 alt="" />
                                <Placeholder2 />
                              </FramePlaceholder>
                            </Frame10>
                            <Divider11 />
                            <Divider12 />
                          </CellElements10>
                          <CellElements2>
                            <Frame>
                              <HeaderCellContent>
                                <UserAvatarIcon1 alt="" />
                                <CellContent12>
                                  Lorem Ipsum Dolor Si...
                                </CellContent12>
                              </HeaderCellContent>
                              <FramePlaceholder>
                                <PlaceholderIcon1 alt="" />
                                <Placeholder2 />
                              </FramePlaceholder>
                            </Frame>
                            <Divider11 />
                            <Divider12 />
                          </CellElements2>
                          <CellElements2>
                            <Frame1>
                              <HeaderCellContent>
                                <UserAvatarIcon1 alt="" />
                                <CellContent12>
                                  Lorem Ipsum Dolor Si...
                                </CellContent12>
                              </HeaderCellContent>
                              <FramePlaceholder>
                                <PlaceholderIcon1 alt="" />
                                <Placeholder2 />
                              </FramePlaceholder>
                            </Frame1>
                            <Divider11 />
                            <Divider12 />
                          </CellElements2>
                        </ImageText2>
                        <ImageText3>
                          <ColumnHeaders3>
                            <Divider7 />
                            <Divider8 />
                            <HeaderTitle3>
                              <Frame11>
                                <Title15>Ghi chú</Title15>
                                <Placeholder5 />
                                <Divider9 />
                                <Divider10 />
                              </Frame11>
                            </HeaderTitle3>
                          </ColumnHeaders3>
                          <CellElements11>
                            <Frame10>
                              <HeaderCellContent>
                                <UserAvatarIcon alt="" />
                                <CellContent16>Dạy học trên lớp</CellContent16>
                              </HeaderCellContent>
                              <FramePlaceholder>
                                <PlaceholderIcon1 alt="" />
                                <Placeholder2 />
                              </FramePlaceholder>
                            </Frame10>
                            <Divider11 />
                            <Divider12 />
                          </CellElements11>
                          <CellElements11>
                            <Frame10>
                              <HeaderCellContent>
                                <UserAvatarIcon alt="" />
                                <CellContent16>{`Hướng dẫn thực hành `}</CellContent16>
                              </HeaderCellContent>
                              <FramePlaceholder>
                                <PlaceholderIcon1 alt="" />
                                <Placeholder2 />
                              </FramePlaceholder>
                            </Frame10>
                            <Divider11 />
                            <Divider12 />
                          </CellElements11>
                          <CellElements11>
                            <Frame10>
                              <HeaderCellContent>
                                <UserAvatarIcon alt="" />
                                <CellContent16>Chấm điểm</CellContent16>
                              </HeaderCellContent>
                              <FramePlaceholder>
                                <PlaceholderIcon1 alt="" />
                                <Placeholder2 />
                              </FramePlaceholder>
                            </Frame10>
                            <Divider11 />
                            <Divider12 />
                          </CellElements11>
                          <CellElements2>
                            <Frame>
                              <HeaderCellContent>
                                <UserAvatarIcon1 alt="" />
                                <CellContent12>
                                  Lorem Ipsum Dolor Si...
                                </CellContent12>
                              </HeaderCellContent>
                              <FramePlaceholder>
                                <PlaceholderIcon1 alt="" />
                                <Placeholder2 />
                              </FramePlaceholder>
                            </Frame>
                            <Divider11 />
                            <Divider12 />
                          </CellElements2>
                          <CellElements2>
                            <Frame1>
                              <HeaderCellContent>
                                <UserAvatarIcon1 alt="" />
                                <CellContent12>
                                  Lorem Ipsum Dolor Si...
                                </CellContent12>
                              </HeaderCellContent>
                              <FramePlaceholder>
                                <PlaceholderIcon1 alt="" />
                                <Placeholder2 />
                              </FramePlaceholder>
                            </Frame1>
                            <Divider11 />
                            <Divider12 />
                          </CellElements2>
                          <CellElements17>
                            <Frame13>
                              <Frame12>
                                <UserAvatarIcon alt="" />
                                <CellContent12>Chú thích thêm...</CellContent12>
                              </Frame12>
                              <FramePlaceholder>
                                <PlaceholderIcon1 alt="" />
                                <Placeholder2 />
                              </FramePlaceholder>
                            </Frame13>
                            <Divider11 />
                            <Divider12 />
                          </CellElements17>
                        </ImageText3>
                      </TableContent1>
                    </SecondTable>
                  </SecondTableContainer>
                </TableContainer>
              </CustomerStats>
              <ButtonWrapper>
                <Button5>
                  <StateLayer3>
                    <LabelText1>+ Công việc mới</LabelText1>
                  </StateLayer3>
                </Button5>
              </ButtonWrapper>
            </PageContent>
          </BreadcrumbsDarkmode>
        </Content>
      </Navigation1>
    </DesktopChiTitKpiRoot>
  );
};

export default KPIDetail;
